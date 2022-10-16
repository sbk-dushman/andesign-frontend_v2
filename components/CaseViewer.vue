<template>
<v-container
  fluid
  class="CaseViewer-container"
>
  <v-row
    align="center"
    class="fill-height"
  >
    <v-col
      cols="12"
      md="8"
    >
      <div
        class="case-slider case-viewer"
        ref="portfolioCaseSlider"
      >
        <div
          class="slider-wrapper d-flex"
          ref="portfolioCaseWrapper"
          :style="'transform: translateX(-'+ slidePosition +'px)'"
        >
          <v-sheet
            v-for="image in pCase.acf.media"
            :key="image.id"
            ref="portfolioCaseItem"
            v-touch="{
              left: () => nextSlide(),
              right: () => prevSlide(),
            }"
            class="d-flex px-3"
          >
            <v-img
              :src="image.url"
              class="mx-auto"
              contain
              :max-height="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'calc(80vh - 2em)' : 'calc(100vh - 2em)'"
              :max-width="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'calc(100vw - 2em)': 'calc(60vw - 2em)'"
            />
          </v-sheet>
        </div>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <h3
        v-html="pCase.title.rendered"
      />
      <hr
        class="andeLightGray my-6 d-none d-md-block"
      />
      <p
        v-html="description"
      />
      <v-spacer/>
      <div
        class="nav-buttons mt-2">
        <v-btn
          v-if="pCase.acf.media.length > 1"
          fab
          depressed
          :disabled="!slide"
          elevation="0"
          color="andeLightGray"
          class="prev-button"
          @click="prevSlide"
          ref="prevButton"
        >&nbsp;</v-btn>
        <v-btn
          v-if="pCase.acf.media.length > 1"
          fab
          depressed
          :disabled="!(pCase.acf.media.length > slide + 1)"
          elevation="0"
          color="andeLightGray"
          class="next-button"
          @click="nextSlide"
          ref="nextButton"
        >&nbsp;</v-btn>
        <v-btn
          fab
          depressed
          elevation="0"
          color="andeLightGray"
          class="view-button"
          @click="close()"
        >&nbsp;</v-btn>
      </div>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "CaseViewer",
  props: {
    pCase: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // description: this.pCase.acf.media[0].caption ? this.pCase.acf.media[0].caption : '',
      slide: 0,
      slidePosition: 0,
    };
  },
  computed: {
    description () {
      return this.pCase?.acf?.media[this.slide]?.caption ? this.pCase.acf.media[this.slide].caption : ''
    }
  },
  created() {
  },
  methods: {
    setSlide (slide = this.slide) {
      this.$nextTick(function () {
        this.slidePosition = this.$refs.portfolioCaseItem.slice(0, slide).reduce( (a, b) => (a + b.$el.clientWidth), 0)
      })
    },
    nextSlide() {
      if (this.slide < this.$refs.portfolioCaseItem.length - 1) {
        this.slide++
        return this.setSlide()
      }
      return
    },
    prevSlide() {
      if (this.slide) {
        this.slide--
        return this.setSlide()
      }
      return
    },
    close() {
      this.slide = 0
      this.setSlide()
      return this.$nuxt.$emit('close-case-viewer')
    },
  }
};
</script>

<style lang="scss">
.CaseViewer-container {
  width: 100vw;
  height: 100vh;
  align-content: center;
  justify-content: center;

  div.case-slider.case-viewer {
      overflow: hidden;

    .slider-wrapper{
      touch-action: auto !important;
      transition: ease 0.2s;

      .v-sheet {
        background: 0 0;
        .container {
          padding: 1em 1.25em;
          height:100%;
          
          @media only screen and (min-width: 960px) {
          padding: 1em 1.5em;
          }
          
          @media only screen and (min-width: 960px) {
          padding: 1em 4em;
          }
        }
      }
    }
  }
  hr {
    height: 7px;
    margin-left: 0;
  }

  .nav-buttons {
    width: 150px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 960px) {
      position: relative;
    }
    
    .v-btn {
      z-index: 1;
      overflow: hidden;
      width: 42px;
      height: 42px;
      border-radius: 9999px;

      &.prev-button {
        margin-right: 0;
      }

      &.next-button {
        margin-left: 0;
        align-self: flex-end;
        @media only screen and (min-width: 960px) {
          align-self: auto;
        }
      }

      &:focus::before, &:hover::before {
        opacity: 1;
      }
    }

    .prev-button::before, .next-button::before {
      content: "";
      width: 42px;
      height: 42px;
      background-color: var(--v-andeDarkOrange-base);
      border-radius: 9999px;
      background-image: url("/img/mail_back2.svg");
      background-repeat: no-repeat;
      background-position: center -114px;
      transition: .2s all .2s ease-out;
      opacity: 1;
    }

    .prev-button:hover::before, .next-button:hover::before {
      background-position: center top;
    }

    .prev-button::after, .next-button::after {
      content: url("/img/forward.svg");
      position: absolute;
      background-color: transparent;
      background-image: url("/img/mail_back1.svg");
      background-repeat: no-repeat;
      background-position: center -114px;
      transition: .4s all .2s ease-in;
      opacity: 1;
      width: 42px;
      height: 42px;
      border-radius: 9999px;
      padding: 8px 14px;
    }

    .prev-button::after {
      content: url("/img/back.svg");
      padding: 8px 5px 0 0;
    }

    .next-button:hover::after, .prev-button:hover::after {
      background-position: center top;
    }

    .v-btn--disabled {
      opacity: 0.25;
    }

    .v-btn.view-button span {
      background: url(/img/close.svg) center center no-repeat;
    }

    .view-button:after {
      padding-top: .9em;
      content: url(/img/close_white.svg);
    }
  }
}
</style>