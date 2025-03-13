<template>
    <!-- :class="{ hide: ($vuetify.breakpoint.sm || !$vuetify.breakpoint.xs ) && !hideIT}" -->
  <div  v-scroll="onScroll"

  
             v-if="videoMenu.length > 0"  class="video-menu">
    <v-menu
 
      z-index="0"
      bottom
      open-on-hover
      :origin="($vuetify.breakpoint.sm||$vuetify.breakpoint.xs)? 'right' :'top'"
      :transition=" ($vuetify.breakpoint.sm||$vuetify.breakpoint.xs)? 'slide-x-reverse-transition' :'slide-y-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <transition name="fade">
        <div v-if="!asideOpen"
          v-bind="attrs"
          v-on="on" 
          class="video-toggle  tuor andeTeal rounded-b-pill"
          :class="[{ hide: hideIT&&!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs }, 'nav-menu-base']"

          >
          <span
            class="d-md-none"
          >
          <svg class="video-logo-mobile" fill="#000000" width="800px" height="800px" viewBox="0 -4 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z"/>
</svg>
          </span>
          <span   
            class="white--text d-none d-md-inline"
          >Видео</span>
        </div>
        </transition>
      </template>
      <v-list
        dense
        color="andeTeal"
        rounded
        :class="[{ hide: hideIT&&!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs }, 'nav-menu-base']"
        class="presentations-list tuor-list"
      >
        <v-list-item  @click.stop.prevent="showVideo( video.title,video.url,video.attr_title,video.description,video.xfn)"
          v-for="video in videoMenu"
          :key="video.id"
          class="text-uppercase video-list"
          href="#"
      
        >
          <span>
            {{ video.title }}
          </span>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "NavVideo",
  model: {
    prop: 'asideOpen',
  },
  props: {
  asideOpen: {
    type: Boolean,
    default: false
  },
  formActive:  {
    type: Boolean,
    default: false
  },
  
},
  data() {
    return {
      toggled: false,
      focused: false,
      hideIT: false,
    }
  },
  watch: {
      formActive () {
        if (this.formActive === false) {
          this.hideIT = false;
        }
        if (this.formActive === true) {
          this.hideIT = true;
        }

      },
    },
  methods: {
    showVideo(title,srcMP4,srcWEBM,srcDescr,srcPoster) {
      this.$nuxt.$emit('open-dialog', 'video-modal', {title:title,src_webm: srcWEBM, src_mp4: srcMP4,description:srcDescr,poster:srcPoster})
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.hideIT = top > 50
    },
  },
  computed: {
 videoMenu() {
      return this.$store.state.videoMenu.filter((item)=> item.xfn==="on");
    }
  }
};
</script>

<style lang="scss" scoped>

div {
  vertical-align: middle;
}
.video-logo-mobile{
  fill: #fff;
  width:25.5px; 
  height:27.5px;
  
}
.video-list{
  max-width: 130px!important;
}
.video-toggle {
  display: flex;
    align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -3em;
    height: 3em;
        right: calc(19em + 16px);
  //  padding: 0 2.5em;
  padding: .5em 1em;
  min-width: 56px;
  width: 130px;
  max-width: 130px;
  z-index: 1;
  border-bottom-left-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
  opacity: 1;
  transition: .4s opacity  ease;




  @media only screen and (max-width: 960px) {
    // align-items: center;
    right: calc(0.25em + 16px);
    top: 8em;
    padding: .5em;
    height: 4em;
    width: auto;
    width: 56px;
    border-bottom-left-radius: 999px !important;
  border-bottom-right-radius: 999px !important;
  }
  @media only screen and (min-width: 1424px) {
    right: calc(21.4em + 16px);
  }

  span {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

a, span {
  color: white;
  font-size: 14px;
}

a:active, a:focus, a:visited {
  color: white;
}

.presentations-list {

  padding: 4em 0 2em;

  .v-list-item__content, .v-list-item__title {
    overflow: visible;
  }
}


</style>