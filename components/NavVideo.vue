<template>
  <div class="video-menu">
    <v-menu
      bottom
      open-on-hover
      origin="top"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="video-toggle tuor andeTeal rounded-b-pill"
        >
          <span
            class="d-md-none"
          >
<svg class="video-logo-mobile" version="1.1" id="Слой_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 170.08 170.08" xml:space="preserve">


	<g i:extraneous="self">
		<path d="M129.51,83.15c1.45,0.84,1.45,2.93,0,3.77l-37.53,21.67l-37.53,21.67c-1.45,0.84-3.26-0.21-3.26-1.88V85.04V41.7
			c0-1.68,1.81-2.72,3.26-1.88l37.53,21.67L129.51,83.15z"/>
	</g>
</svg>

          </span>
          <span   
            class="white--text d-none d-md-inline"
          >Видео</span>
        </div>
      </template>
      <v-list
        dense
        color="andeTeal"
        rounded
        class="presentations-list tuor-list"
      >
        <v-list-item
          v-for="video in videoMenu"
          :key="video.id"
          class="text-uppercase"
          href="#"
      
        >
          <span @click.stop.prevent="showVideo( video.title,video.url,video.attr_title,video.description,video.xfn)">
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
  props: {
  },
  data() {
    return {
      toggled: false,
      focused: false
    }
  },
  methods: {
    showVideo(title,srcMP4,srcWEBM,srcDescr,srcPoster) {
      this.$nuxt.$emit('open-dialog', 'video-modal', {title:title,src_webm: srcWEBM, src_mp4: srcMP4,description:srcDescr,poster:srcPoster})
    },
  },
  computed: {
 videoMenu() {
      return this.$store.state.videoMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
.menuable__content__active {
  z-index: 0!important;
}

div {
  vertical-align: middle;
}
.video-logo-mobile{
  fill: #fff;
  width:25.5px; 
  height:27.5px;
  
}
.video-toggle {
  display: flex;
    align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -3em;
    height: 3em;
        right: calc(27.5em + 16px);
   padding: 0 2.5em;
  min-width: 56px;
  z-index: 1;



  @media only screen and (max-width: 960px) {
    // align-items: center;
    right: calc(0.25em + 16px);
    top: 8em;
    padding: .5em;
    height: 4em;
    width: auto;
  }
  @media only screen and (min-width: 1424px) {
    right: calc(36em + 16px);
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