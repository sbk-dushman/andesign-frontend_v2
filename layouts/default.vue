<template>
  <v-app>
    <app-nav
      app
      :categories="categories"
    />
    <v-main
      id="main"
    >
      <span class="descr andeGray--text">Группа визуальных коммуникаций</span>
      <v-btn
            v-scroll="onScroll"
            v-show="showToTop"
            fab
            dark
            fixed
            :top = "!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
            :bottom = "($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
            :left = "!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
            :right = "($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
            color="andeOrange"
            style="margin-top:7em; margin-left: 3em; margin-right:.25em"
            @click="toTop"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="24.528" height="15.567" viewBox="0 0 24.528 15.567">
                <path id="Path_1487" data-name="Path 1487" d="M-1091.5,1353l12.623,10.854-5.259,4.522-7.363,6.331" transform="translate(-1351.589 -1077.344) rotate(-90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
              </svg>
          </v-btn>
      <nuxt />
      <app-map />
      <app-footer :categories="categories" />
    </v-main>
    <keep-alive>
      <modal-component componentName="order-form" :componentProps="{allowUpload: true}" :dark="true" />
    </keep-alive>
  </v-app>
</template>

<script>
import AppNav from "~/components/AppNav.vue"
import AppMap from "~/components/AppMap.vue"
import AppFooter from "~/components/AppFooter.vue"

export default {
  components: {
    AppNav,
    AppMap,
    AppFooter
  },
  data() {
    return {
      showToTop: false,
    }
  },
  computed : {
    categories() {
      return this.$store.state.categories
    }
  },
  created() {
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.showToTop = top > 50
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
html {
  font-family: "Circe", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #F6FBFB;
  color: #151D24;
}

.v-application {
    font-family: "Circe", sans-serif;
    line-height: 1.2;
}

h1,
h2,
h3,
h4 {
  font-family: "Circe", serif;
  font-weight: 300;
  color: #151D24;
  text-transform: uppercase;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  font-size: 3.4375em;
  margin-bottom: 30px;
}

.aligncenter,.alignleft,.alignright {
    display: block;
    padding: 0;
}

.aligncenter {
    float: none;
    margin: .5em auto 1em;
}

.alignright {
    float: right;
    margin: .5em 0 1em 1em;
}

.alignleft {
    float: left;
    margin: .5em 1em 1em 0;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
  color: #151D24;
  line-height: 1.4;
  font-size: .875em;
  
  @media only screen and (min-width: 960px) {
    font-size: 1rem;
  }
}

.big-thin-text {
  font-size: 3.4375em;
  @include fluid-type(font-size, 1280px, 1920px, 38px, 55px);
  font-weight: 300;
  text-transform: uppercase;
}

hr {
  height: 7px;
  border:none;
  border-radius: 4px;
}

.with-dot {
  position: relative;
  z-index: 0;
}

.with-dot:before {
  content: "";
  width:7px;
  height:7px;
  border-radius: 9999px;
  background-color: var(--v-andeOrange-base);
  display: block;
  position: absolute;
  bottom:.3em;
  left: -.3em;
  z-index: -1;
}

.with-dot.ease-width:before {
  transition: .1s width .3s ease;
}

.with-dot.ease-width:hover:before, .nuxt-link-active:before, .with-dot.dot-active.ease-width:before, .with-dot.extrude-dot:before {
  width: calc(100% + .6em);
}

.with-dot.ease-opacity:before {
  transition: opacity .3s ease;
}

.with-dot.ease-opacity:hover:before, .with-dot.dot-active.ease-opacity:before {
  opacity: 0;
}

.with-dot.ease-height:before {
  transition: height .3s ease;
}
.with-dot.ease-height:hover:before, .with-dot.dot-active.ease-height:before {
  height: 0;
}

.v-btn.view-button {
  overflow: hidden;
  position: relative;
  font-size: .75em;
  font-weight: bold;
  text-align: center;
  height: 3.25em;
  width: 11.25em;
  
  @media only screen and (min-width: 1424px) {
    font-size: 1.1429em;
    height: 3em;
    width: 9.8em;
  }

  & span {
    transition: .2s transform .3s ease-out;
  }

  &:before, &:after {
    content: "";
    margin:auto;
    display: block;
    position: absolute;
    opacity: 1;
    width:100%;
    height:200%;
    top: -300%;
    background: url("/img/eye_back1.svg") center bottom no-repeat;
    transition: .2s all .2s ease-out;
    background-size: cover;
  }

  &:after {
    content: url("/img/eye.svg");
    background: url("/img/eye_back2.svg") center bottom no-repeat;
    background-size: cover;
    transition: .4s all .2s ease-in;
    padding-top: .975em;
    top: -200%;
  }

  &:hover span {
    transform: translateY(150%);
  }

  &:hover:before, &:hover:after {
    top: 0;
    opacity:1;
  }
}

.v-btn--fab.v-size--default {
    height: 2.625em;
    width: 2.625em;
    font-size: 1em;

  // @media only screen and (min-width: 1424px) {
  //   width: 2.296789em;
  //   height: 2.296789em;
  //   font-size: 1.1429em;
  // }
}

.v-btn--round {
  width: 2.625em;
  height: 2.625em;
}

span.descr {
  text-align: left;
  text-transform: uppercase;
  font-size: .625em;
  font-weight: 400;
  line-height: 1.45;
  width: 10em;
  top: 7em;
  left: 2em;
  position: absolute;
  z-index: 1;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 2.954em;
}
  
@media only screen and (min-width: 960px) {
  span.descr {
    top: 13em;
    left: 3em;
  }
}

@media only screen and (min-width: 1424px) {
  span.descr {
    font-size: .875em;
    top: 9.142857em;
    left: 4.571428em;
  }
}

.v-slide-group__next, .v-slide-group__prev {
  display: none;
}

</style>
