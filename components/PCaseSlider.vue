<template>
<v-container
  fluid
  class="py-0 px-3 pe-md-0 PCase-slider-container"
>
  <v-row
    no-gutters
    class="pa-0"
  >
      <v-col
        class="pa-0"
      >
      <div
        class="case-slider"
        ref="caseSlider"
      >
        <div
          class="slider-wrapper d-flex"
          ref="caseWrapper"
          :style="'transform: translateX(-'+ slidePosition +'px)'"
        >
          <v-sheet
            v-for="image in images"
            :key="image.id"
            ref="caseItem"
            v-touch="{
              left: () => nextSlide(),
              right: () => prevSlide(),
            }"
            :width="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? image.width/image.height*12.5 + 2 + 'em' : $vuetify.breakpoint.md ? image.width/image.height*24.5625 + 2 + 'em' : image.width/image.height*32 + 2 + 'em'"
          >
            <v-row>
              <v-col
                class="pt-0 ps-0 pe-sm-4"
              >
                <v-img
                  :src="image.sizes['case-img']"
                  ref="caseImg"
                  :height="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? '12.5em' : $vuetify.breakpoint.md ? '24.5625em' : '32em'"
                  :width="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? image.width/image.height*12.5 + 'em' : $vuetify.breakpoint.md ? image.width/image.height*24.5625 + 'em' : image.width/image.height*32 + 'em'"
                />
              </v-col>
            </v-row>
            <v-row
              v-if="image.caption"
            >
              <v-col>
                <div
                  style="max-width:24em"
                >
                  <p
                    v-html="image.caption"
                  />
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
      </div>
    </v-col>
  </v-row>
  <v-row
    no-gutters
  >
    <v-col>
      <div
        v-if="images.length > 1"
        class="nav-buttons d-flex">
        <v-btn
          fab
          depressed
          :disabled="!slide"
          elevation="0"
          color="andeLightGray"
          :class="[{'mb-15' : nextIsDisabled}, 'prev-button']"
          @click="prevSlide"
          ref="prevButton"
        >&nbsp;</v-btn>
        <v-btn
          fab
          depressed
          :disabled="!(images.length > slide + 1)"
          elevation="0"
          color="andeLightGray"
          :class="[{'mb-15' : prevIsDisabled, 'mb-2' : !prevIsDisabled}, 'next-button']"
          @click="nextSlide"
          ref="nextButton"
        >&nbsp;</v-btn>
      </div>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "PCaseSlider",
  props: {
    images: {
      type: Array,
      default: ()=> []
    }
  },
  data() {
    return {
      prevIsDisabled: !this.even,
      nextIsDisabled: this.even,
      slide: 0,
      slidePosition: 0,
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    setSlide (slide) {
      this.$nextTick(function () {
        this.slidePosition = this.$refs.caseItem.slice(0, slide).reduce( (a, b) => (a + b.$el.clientWidth), 0)
      })
    },
    nextSlide () {
      if (this.slide < this.$refs.caseItem.length-1) {
        this.slide++
        return this.setSlide(this.slide)
      }
      return
    },
    prevSlide () {
      if (this.slide) {
        this.slide--
        return this.setSlide(this.slide)
      }
      return
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
.PCase-slider-container {

  div.case-slider {

    overflow: hidden;
  
    .slider-wrapper {
      touch-action: auto !important;
      transition: ease 0.2s;
    }
    .v-sheet {
      background: transparent;
      max-width: 100vw;

      @media only screen and (min-width: 960px) {
        max-width: 65vw;
      }

      .row {
        margin: 0;
        
    
        h3 {
          font-size: 1rem;
          font-weight: 400;
          text-transform: uppercase;
          color: var(--v-andeOrange-base);
          margin-bottom: 1em;
          white-space: normal;
        }

        hr {
          height: 2px;
          margin-left: -24px;
          position: relative;
        }

        p {
          white-space: normal;
          color: var(--v-andeGray-base);
          font-size:.75em;
        }
      }
    }
  }

  .nav-buttons {

    width: 96px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 960px) {
      position: relative;
    }

    p {
      margin: 3em 0 .5em 1.6em;
      width: 100%;
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
  }
}
</style>