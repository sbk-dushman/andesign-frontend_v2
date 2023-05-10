<template>
  
  <section class="masthead" id="masthead">
    <v-container
      fluid
    >
      <v-row>
        <v-col
          class="hero"
          cols="12"
          offset-md="2"
          md="6"
          lg="4"
        >
          <h1
            class="moto"
          >
            <v-img
              contain
              max-height="312"
              max-width="503"
              src="/img/moto.png"
              alt="Я пришел в этот мир, чтобы творить!"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="andyOrange lighten-5"
                  />
                </v-row>
              </template>
            </v-img>
          </h1>
          <v-row class="mt-7 mt-md-n5 mt-lg-7 mb-md-7">
            <v-col
              cols="12"
              md="3"
              lg="4"
              offset-md="2"
              offset-lg="3"
              class="px-1 py-0"
            >
              <v-btn
                color="andeTeal"
                large
                rounded
                depressed
                class="white--text view-button"
                @click="$vuetify.goTo('#portfolio')"
              ><span>Смотреть</span></v-btn>
            </v-col>
            <v-col
              cols="12"
              md="5"
              style="position:relative;"
              class="pa-1"
            >
              <v-sheet 
                class="mx-auto andeDarkOrange hero-order-wrapper d-none d-md-flex"
                rounded="circle"
              >
                <v-btn
                  large
                  rounded
                  outlined
                  depressed
                  @click.stop="orderButton"
                  class="white--text view-button order-button"
                ><span>Заказать</span></v-btn>
              </v-sheet>
               <v-btn
                  large
                  rounded
                  outlined
                  depressed
                  @click.stop="orderButton"
                  class="white--text view-button order-button andeDarkOrange d-flex d-md-none"
                ><span>Заказать</span></v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="11"
              sm="8"
              md="7"
            >
            <p
            v-html="intro"
            />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="1"
          offset-md="3"
          offset-lg="5"
          class="social d-none d-md-flex"
        >
          <!-- <a
            href="https://ru-ru.facebook.com/profile.php?id=100004352977996"
            target="_blank"
          >
            <v-btn
              fab
              width="45px"
              height="45px"
              elevated="false"
              class="social-fb-button"
            >
              <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="11.4" height="19.5" viewBox="0 0 11.4 19.5" aria-label="fb-alt">
                <title id="fb-alt">Мы в Facebook</title>
                <g id="Facebook-2" data-name="Facebook" transform="translate(-0.25 -0.25)">
                    <path id="fb-Shape" d="M7.05,19.5H3.45a.751.751,0,0,1-.75-.751V12.3H.75A.751.751,0,0,1,0,11.55V7.95A.751.751,0,0,1,.75,7.2H2.7V5.25A5.251,5.251,0,0,1,7.95,0h2.7A.751.751,0,0,1,11.4.75v3.6a.751.751,0,0,1-.751.751H7.95A.148.148,0,0,0,7.8,5.25V7.2H10.65a.75.75,0,0,1,.728.931l-.9,3.6a.75.75,0,0,1-.728.569H7.8V18.75A.751.751,0,0,1,7.05,19.5ZM1.5,8.7v2.1H3.45a.751.751,0,0,1,.751.75V18H6.3V11.55a.751.751,0,0,1,.75-.75H9.165l.525-2.1H7.05A.751.751,0,0,1,6.3,7.95V5.25A1.65,1.65,0,0,1,7.95,3.6H9.9V1.5H7.95A3.749,3.749,0,0,0,4.2,5.25v2.7A.751.751,0,0,1,3.45,8.7Z" transform="translate(0.25 0.25)" fill="#5f6a75"/>
                </g>
              </svg>
            </v-btn>
          </a> -->
          
          <!-- <a
            href="https://www.instagram.com/ande_sign_2004/"
            target="_blank"
          > -->
                 <a
            href="https://t.me/+a8P9JSM74AUyZjNi/"
            target="_blank"
            >
            <v-btn
              fab
              width="42px"
              height="42px"
              class="social-ig-button"
              elevated="false"
            >
            <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.12 435.8">
              <title id="ig-alt">Мы в Telegram</title>
              <path id="ig-Path" d="m123.81,414.71C-7.16,357.14-57.32,157.71,88.84,42.53,122.92,15.68,181.06-3.7,229.1.6c.22.02,4.8.21,6.94.24,9.6.14,42.36,6.22,61.07,14.22,113.45,48.54,154.75,155.9,133.75,250.46-27.26,122.73-161.71,213.07-307.04,149.19Zm285.45-197.1h0c0-122.21-117.31-224.83-256.47-179.29C63.8,67.45,15.73,169.86,27.84,238.81c11.15,63.52,21.19,72.8,51.19,110.65,16.95,21.39,70.7,55.03,112.05,58.2,48.58,3.72,54.93-.93,59.09-.89,2.98.03,37.2-8.94,42.02-12.41.25-.18.57-.32.88-.35,15.16-1.19,116.2-58.67,116.2-176.4Z"/>
              <path d="m321.25,128.64c-.29,4.84-35.08,186.4-37.5,191.61-5.44,11.72-20.24,16.37-29.85,12.95-9.62-3.42-44.63-33.42-49.09-35.55-2.63-1.26-20.58,19.79-30.71,25.37-8,4.4-19.31.16-23.53-11.38-4.96-13.56-18.21-59.47-18.64-59.61-.1-.03-41.97-14.52-43.18-14.77-16.93-3.42-27.33-25.16-8.67-37.56,6.59-4.38,114.62-48.24,173.66-73.71,28.21-12.17,46.51-20.22,51.24-17.65,3.13,1.7,14.79,1.66,16.27,20.3Zm-59.27,182.05c.48-1.52,35.07-175.62,34.39-177.06-.1.04-195.31,82.25-195.39,82.45.51.78,47.23,16.5,47.13,16.46,1.18.6,103.09-63.22,107.41-65.81,5.67-3.4,10.18-6.9,14.4-5.8,2.62.68,4.18,5.28,1.09,8.31-95.53,93.67-92.46,79.04-93.86,95.33,0,.1-4.73,26.46-4.14,28.4,2-.75,11.38-10.1,26.32-23.5,5.27-4.73,6.05-.32,12.42,3.55,4.33,2.63,47.02,37.38,50.22,37.67Z"/>
            </svg>      
              <!-- <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="18.884" height="18.915" viewBox="0 0 18.884 18.915" aria-labeled="id-alt">
                <title id="ig-alt">Мы в Instagram</title>
                <g id="Instagram-2" data-name="Instagram" transform="translate(-0.558 -0.542)">
                  <path id="ig-Path" d="M0,1A1,1,0,1,1,1,2,1,1,0,0,1,0,1Z" transform="translate(14 4)" fill="#5f6a75"/>
                  <path id="ig-Shape" d="M4.75,9.5A4.75,4.75,0,1,1,9.5,4.75,4.756,4.756,0,0,1,4.75,9.5Zm0-8A3.25,3.25,0,1,0,8,4.75,3.254,3.254,0,0,0,4.75,1.5Z" transform="translate(5.25 5.25)" fill="#5f6a75"/>
                  <path id="ig-Shape-2" data-name="Shape" d="M9.442,18.915a47.567,47.567,0,0,1-5.258-.29,4.426,4.426,0,0,1-2.6-1.242,4.364,4.364,0,0,1-1.271-2.59,46.04,46.04,0,0,1,0-10.669,4.364,4.364,0,0,1,1.271-2.59A4.426,4.426,0,0,1,4.184.291,47.664,47.664,0,0,1,14.7.291a4.425,4.425,0,0,1,2.6,1.242,4.364,4.364,0,0,1,1.271,2.59,45.941,45.941,0,0,1,0,10.669,4.364,4.364,0,0,1-1.271,2.59,4.425,4.425,0,0,1-2.6,1.242A47.585,47.585,0,0,1,9.442,18.915Zm0-17.415a46,46,0,0,0-5.092.281A2.9,2.9,0,0,0,1.8,4.3a44.426,44.426,0,0,0,0,10.32,2.9,2.9,0,0,0,2.55,2.516,46.108,46.108,0,0,0,5.092.281,46.108,46.108,0,0,0,5.092-.281,2.9,2.9,0,0,0,2.55-2.516,44.525,44.525,0,0,0,0-10.32,2.9,2.9,0,0,0-2.55-2.516A46,46,0,0,0,9.442,1.5Z" transform="translate(0.558 0.542)" fill="#5f6a75"/>
                </g>
              </svg> -->
            </v-btn>
          </a>
          <hr
            class="andeOrange my-4" 
            width="42px"
          />
          <p
            class="andeGray--text"
          >
            Присоединяйтесь<br/>к&nbsp;нам
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="9"
          offset-md="2"
          md="9"
          lg="12"
          offset-lg="0"
        >
          <v-row>
            <v-col 
              v-for="(service, index) in services" :key="service.descr"
              cols="12"
              md="12"
              lg="1"
              :offset-lg="index === 0 ? 2 : 0"
              class="comp comp-bg"
            >
            <span class="with-dot extrude-dot font-weight-black comp-num"
                v-html="index < 9 ? '0' + (index + 1) : index + 1"
            />
            <p
              class="my-0"
              v-html="service.descr"
            />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="2"
          class="social d-flex d-md-none"
        >
          <!-- <a
            href="https://ru-ru.facebook.com/profile.php?id=100004352977996"
            target="_blank"
          >
            <v-btn
              fab
              width="45px"
              height="45px"
              elevated="false"
              class="social-fb-button"
            >
              <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="11.4" height="19.5" viewBox="0 0 11.4 19.5" aria-label="fb-alt">
                <title id="fb-alt">Мы в Facebook</title>
                <g id="Facebook-2" data-name="Facebook" transform="translate(-0.25 -0.25)">
                    <path id="fb-Shape" d="M7.05,19.5H3.45a.751.751,0,0,1-.75-.751V12.3H.75A.751.751,0,0,1,0,11.55V7.95A.751.751,0,0,1,.75,7.2H2.7V5.25A5.251,5.251,0,0,1,7.95,0h2.7A.751.751,0,0,1,11.4.75v3.6a.751.751,0,0,1-.751.751H7.95A.148.148,0,0,0,7.8,5.25V7.2H10.65a.75.75,0,0,1,.728.931l-.9,3.6a.75.75,0,0,1-.728.569H7.8V18.75A.751.751,0,0,1,7.05,19.5ZM1.5,8.7v2.1H3.45a.751.751,0,0,1,.751.75V18H6.3V11.55a.751.751,0,0,1,.75-.75H9.165l.525-2.1H7.05A.751.751,0,0,1,6.3,7.95V5.25A1.65,1.65,0,0,1,7.95,3.6H9.9V1.5H7.95A3.749,3.749,0,0,0,4.2,5.25v2.7A.751.751,0,0,1,3.45,8.7Z" transform="translate(0.25 0.25)" fill="#5f6a75"/>
                </g>
              </svg>
            </v-btn>
          </a> -->
          <a
          href="https://t.me/+a8P9JSM74AUyZjNi/"
            target="_blank"
          >
            <v-btn
              fab
              width="42px"
              height="42px"
              class="social-ig-button"
              elevated="false"
            >
            <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.12 435.8">
              <title id="ig-alt">Мы в Telegram</title>
              <path id="ig-Path" d="m123.81,414.71C-7.16,357.14-57.32,157.71,88.84,42.53,122.92,15.68,181.06-3.7,229.1.6c.22.02,4.8.21,6.94.24,9.6.14,42.36,6.22,61.07,14.22,113.45,48.54,154.75,155.9,133.75,250.46-27.26,122.73-161.71,213.07-307.04,149.19Zm285.45-197.1h0c0-122.21-117.31-224.83-256.47-179.29C63.8,67.45,15.73,169.86,27.84,238.81c11.15,63.52,21.19,72.8,51.19,110.65,16.95,21.39,70.7,55.03,112.05,58.2,48.58,3.72,54.93-.93,59.09-.89,2.98.03,37.2-8.94,42.02-12.41.25-.18.57-.32.88-.35,15.16-1.19,116.2-58.67,116.2-176.4Z"/>
  <path d="m321.25,128.64c-.29,4.84-35.08,186.4-37.5,191.61-5.44,11.72-20.24,16.37-29.85,12.95-9.62-3.42-44.63-33.42-49.09-35.55-2.63-1.26-20.58,19.79-30.71,25.37-8,4.4-19.31.16-23.53-11.38-4.96-13.56-18.21-59.47-18.64-59.61-.1-.03-41.97-14.52-43.18-14.77-16.93-3.42-27.33-25.16-8.67-37.56,6.59-4.38,114.62-48.24,173.66-73.71,28.21-12.17,46.51-20.22,51.24-17.65,3.13,1.7,14.79,1.66,16.27,20.3Zm-59.27,182.05c.48-1.52,35.07-175.62,34.39-177.06-.1.04-195.31,82.25-195.39,82.45.51.78,47.23,16.5,47.13,16.46,1.18.6,103.09-63.22,107.41-65.81,5.67-3.4,10.18-6.9,14.4-5.8,2.62.68,4.18,5.28,1.09,8.31-95.53,93.67-92.46,79.04-93.86,95.33,0,.1-4.73,26.46-4.14,28.4,2-.75,11.38-10.1,26.32-23.5,5.27-4.73,6.05-.32,12.42,3.55,4.33,2.63,47.02,37.38,50.22,37.67Z"/>
</svg>
            

            </v-btn>
          </a>
          <hr
            class="andeOrange my-4" 
            width="42px"
          />
          <p
            class="andeGray--text"
          >
            Присоединяйтесь<br/>к&nbsp;нам
          </p>
        </v-col>
      </v-row>
      <v-row
        class="d-none d-md-flex"
      >
        <v-col
        cols="12"
          md="1"
          offset-md="2">
        <!-- <v-btn
        
        > -->
          <span class="scroll-down" v-scroll-to="{ 
          el: '#footer', 
          duration: 600,
          easing: 'ease-out', 
          
          }"
      >прокрутите<br />вниз</span>
        <!-- </v-btn> -->
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="fun-facts-container"
        ref="funFactsContainer"
    >
      <v-row
        class="mt-14 mb-0 fun-facts-head"
        ref="funFactsHead"
        :style="{ transform: 'translateX(' + factsTranslate + '%)' }"
      >
        <v-sheet class="fun-facts-head-bg d-none d-md-block"> </v-sheet>
        <v-col 
          v-for="(fact, index) in facts" 
          :key="fact.title"
          cols="3"
          :md="index == 2 ? 3 : 4"
          lg="3"
          :offset="index == 0 ? 1 : '0'"
          :offset-lg="index == 0 ? 2 : '0'"
          class="mb-0 pb-0"
          >
          <!-- <img 
            :src=fact.icon
          > -->
          <hr
            class="andeTeal my-2" 
            width="42px"
          />
          <span
            v-html="fact.featured"
          >
          </span>
        </v-col>
      </v-row>
      <v-row
        class="mt-0 fun-facts-body no-gutters"
        ref="funFactsBody"
        :style="{ transform: 'translateX(' + factsTranslate + '%)' }"
        v-resize="onResize"
      >
        <v-col
          class="mt-0"
          cols="1"
          offset-lg="1"
        >
        </v-col>
        <v-col
          v-for="(fact, index) in facts"
          :key="fact.title"
          cols="3"
          :md="index == 2 ? 3 : 4"
          lg="3"
          offset-md="0"
          class="mt-0 py-5"
        >
          <h3
            v-html="fact.title"
          />
          <hr
            class="white my-2"
            width="42px"
          />
          <p
            v-html="fact.text"
          />
        </v-col>
      </v-row>
      <div
        class="fun-facts-shade d-block d-md-none"
        :style="{ height: factsShadeHeight + 'px' }"
      >
      </div>
      <div
        class="d-flex d-md-none fun-facts-buttons flex-column justify-center"
        :style="{ height: factsShadeHeight + 'px' }"
      >
        <v-btn
          fab
          depressed
          :disabled="nextIsDisabled"
          elevation="0"
          color="andeLightGray"
          :class="[{'mb-15' : prevIsDisabled, 'mb-1' : !prevIsDisabled}, 'next-button']"
          @click="nextFact"
          ref="nextFact"
        >&nbsp;</v-btn>
        <v-btn
          fab
          depressed
          :disabled="prevIsDisabled"
          elevation="0"
          color="andeLightGray"
          :class="[{'mt-15' : nextIsDisabled}, 'prev-button']"
          @click="prevFact"
          ref="prevFact"
        >&nbsp;</v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AppMasthead",
  data() {
    return {
      prevIsDisabled: true,
      nextIsDisabled: false,
      factsTranslate: 0,
      factsShadeHeight: 375,
      isMounted: false,
      windowSize: { x:0, y:0 }
    }
  },
  computed: {
    intro() {
      return this.$store.state.mainPage.intro
    },
    services() {
      return this.$store.state.mainPage.services
    },
    facts() {
      return this.$store.state.mainPage.facts
    },
  },
  methods: {
    orderButton() {
      this.$nuxt.$emit('open-dialog', 'order-form')
    },
    nextFact () {
      this.prevIsDisabled = false
      if ( this.factsTranslate <= -27.666666 ) {
        this.factsTranslate = -55.333333
        return this.nextIsDisabled = true
      }
      return this.factsTranslate -= 27.666667
    },
    prevFact () {
      this.nextIsDisabled = false
      if ( this.factsTranslate >= -27.666667 ) {
        this.factsTranslate = 0
        return this.prevIsDisabled = true
      }
      return this.factsTranslate += 27.666667
    },
    onResize () {
      this.factsShadeHeight = this.$refs.funFactsBody.clientHeight
    },
  },
  mounted() {
    this.onResize()
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
section.masthead {
  display: flex;
  flex-direction: column;
  background: transparent;
  color: #333;
  position: relative;
  padding-top: 6em;

  @media only screen and (min-width: 960px) {
    background-image: url("/img/index_left.png"), url("/img/index_right.png");
    background-repeat: no-repeat;
    background-position: -40% 10%, 135% 90%;
    
    @media only screen and (min-width: 1424px) {
      background-position: -10% 10%, 112% 90%;
    }
  }
  
  h1 {
    color: white;
    @include fluid-type(font-size, 320px, 1366px, 30px, 65px);
  }

  .container {
    padding: 2.5em 1.25em .6em;

    @media only screen and (min-width: 960px) {
      padding: 2.5em 1.5em .6em;
    }

    @media only screen and (min-width: 1424px) {
      padding: 2.5em 4em .6em;
    }
  }

  .moto {
    font-size: 16px;
    margin-top: 2.5em;
    width: 75%;
    z-index: 1;

    @media only screen and (min-width: 960px) {
      margin-top: 1.5em;
      margin-left: -2.125em;
      width: 60%;
    }

    @media only screen and (min-width: 1424px) {
      width: 89%;
    }

    & > div {
      z-index: 1;
    }
  }
  .social-ig-button svg{
    width: 26px;
    fill: rgb(95, 106, 117);
  }
  .hero .v-btn {

    &.order-button:before {
      background: url("/img/mail_back1.svg") center bottom no-repeat;
      background-size: cover;
    }

    &.order-button:after {
      content: url("/img/mail.svg");
      background: url("/img/mail_back2.svg") center bottom no-repeat;
      background-size: cover;
    }
      
    @media only screen and (min-width: 960px) {
      &.view-button {
        width: 9.32291vw;
      }
    }
  }

  .hero-order-wrapper {
    cursor: pointer;
    width: 12.3vw;
    height: 12.3vw;
    top: calc(-6.15vw + 1.6em);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/img/hero-order-btn.png") center top no-repeat;

    @media only screen and (min-width: 960px) {
      width: 12.3vw;
      height: 12.3vw;
      top: calc(-6.15vw + 1.6em);
    }

    &:hover .order-button:after, &:hover .order-button:before {
      top: 0;
    }

    &:hover .order-button span {
      transform: translateY(150%);
    }
  }

  .v-btn:not(.v-btn--round).v-size--large {
    min-height: 3em;
  }

  .social {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    * {
      z-index: 1;
    }

    .v-btn {
      margin: 1em 0;
      overflow: hidden;
  
      &::before, &::after {
        content: "";
        margin:auto;
        display: block;
        position: absolute;
        opacity: 1;
        width: 100%;
        height: 200%;
        top: -300%;
        background: url("/img/fb_back1.svg") center top no-repeat;
        transition: .2s all .2s ease-out;
        background-size: cover;
        border-radius: 0;
        box-shadow: none;
      }

      &::after {
        background: url("/img/fb_back2.svg") center top no-repeat;
        background-size: cover;
        transition: .4s all .2s ease-in;
        top: -200%;
      }

      &.social-ig-button::before {
        background: url("/img/ig_back1.svg") center top no-repeat;
        background-size: cover;
      }

      &.social-ig-button::after {
        background: url("/img/ig_back2.svg") center top no-repeat;
        background-size: cover;
      }

      &:hover::before {
        top: 95%;
      }
      
      &:hover::after {
        top: -5%; 
      }

      & svg * {
        transition: fill .3s ease;
      }

      &:hover svg * {
        fill: white;
      }
    }

    p {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: 0.875em;
      text-transform: uppercase;
    }
  }

  .comp {
    line-height: 1.4;
    min-width: 10%;
    // // -webkit-backdrop-filter: blur(10px);
    // // backdrop-filter: blur(10px);
    // background-color: rgba(246, 251, 251, 0.5)!important;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(246,251,251,.5);
    transition: background-color .5s cubic-bezier(1,0,0,1);

  
    .comp-num {
      font-size: 1.6875em;

      &:before {
        bottom: 0.33em;
        left: -0.33em;
        width: calc(100% + 0.66em);

      }

    }
  }

  .scroll-down {
    font-size: 0.875em;
    color: var(--v-andeTeal-base);
    position: relative;
    cursor: pointer;    
    opacity: 1;
  transition: 0.3s ease-in;
      transition-property: opacity;
    &:before {
      content: url("/img/scroll-down.svg");
      display: block;
      position: absolute;
      left: -2em;
      top: .5em;
    }
    &:hover {
      opacity: 0.5;
  }
}

  .fun-facts-container {
    overflow: hidden;
    position: relative;
    padding-bottom: 0;
    
    .fun-facts-head {
      width: 250%;
      transition: transform .4s ease-in;

      @media only screen and (min-width: 960px) {
        width: auto;
      }

      position: relative;

      img {
        width: auto;
        margin-left: 0.25em;
      }

      span {
        font-size: 13vw;
        font-weight: 800;
        color: var(--v-andeOrange-base);
        display: block;
        margin-bottom: -0.35em;

        @media only screen and (min-width: 960px) {
          font-size: 6vw;
          font-size: clamp(3em, 6vw, 6em) 
        }
      }

      div {
        z-index: 1;
      }

      .fun-facts-head-bg {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: -1px;
        background-color: rgba(246, 251, 251, 0.5)!important;

        @media only screen and (min-width: 960px) {
          left: -.75em;
          right: -.75em;
        }

        @media only screen and (min-width: 1424px) {
        left: 10%;
        right: 10%;
        }
      }

      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        .fun-facts-head-bg {
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          background-color: rgba(246, 251, 251, 0.5);
          transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);
        }
      }
    }

    .fun-facts-body {
      width: 250%;
      transition: transform .4s ease-in;

      @media only screen and (min-width: 960px) {
        width: 100vw;
        left: -1.5em;
        position: relative;
      }

      @media only screen and (min-width: 1424px) {
        left: 0;
        width: auto;
      }

      div:not(.fun-facts-buttons):not(.fun-facts-shade) {
        background-color: var(--v-andeOrange-base);
      
        &:first-child {
          background-image: url("/img/Layer_x0020_13.png");
          background-position: 85% 30%;
          background-repeat: no-repeat;
          border-top-left-radius: 1em;
        }
      
        &:last-child {
          background-image: url("/img/Layer_x0020_12.png");
          background-position: -150% 0%;
          background-repeat: no-repeat;
          border-top-right-radius: 1em;
        }

        h3 {
          font-size: 1.125em;
          text-transform: uppercase;
          max-width: 10em;

          @media only screen and (min-width: 960px) {
            font-size: 1.4375em;
          }
        }

        p {
          max-width: 87%;

          @media only screen and (min-width: 960px) {
            max-width: 67%;
          }
        }
      }
    }

    .fun-facts-shade {
      position: absolute;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(to right, transparent, var(--v-andeOrange-base));
      width: 20vw;
      z-index: 1;
      border-bottom-left-radius: 4em;
      border-top-left-radius: 4em;
    }

    .fun-facts-buttons {
      position: absolute;
      bottom: 0;
      right: 1.25em;
      align-items: center;

      .v-btn {
        z-index: 1;
        overflow: hidden;
        width: 56px;
        height: 56px;
        border-radius: 9999px;

        &.prev-button {
          margin-right: 0;
        }

        &.next-button {
          margin-left: 0;
        }
      }
    
      .prev-button::before, .next-button::before {
        content: "";
        width: 56px;
        height: 56px;
        border-radius: 9999px;
        transition: .2s all .2s ease-out;
        opacity: 1;
        background-color: var(--v-andeDarkOrange-base);
      }

      .prev-button:active::before, .next-button:active::before {
        background-position: center top;
        background-color: currentColor;
      }

      .prev-button::after, .next-button::after {
        content: url("/img/forward.svg");
        position: absolute;
        transition: .4s all .2s ease-in;
        opacity: 1;
        width: 56px;
        height: 56px;
        border-radius: 9999px;
        padding: 14px 18px;
      }

      .prev-button::after {
        content: url("/img/back.svg");
        padding: 15px 11px;
      }

      .next-button:hover::after, .prev-button:hover::after {
        background-position: center top;
      }

      .v-btn--disabled {
        display: none;
      }
    }
  }
}
</style>