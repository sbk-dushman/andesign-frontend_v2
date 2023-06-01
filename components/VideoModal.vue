<template>
  <div class="video-modal">
    <video id="intro-video"  class="intro-section__video"  width="auto"
            height="auto"
            controls="controls" autoplay="false" playsinline  loop="loop" preload="metadata" poster="/img/poster.jpg">
            <source :src="src_webm"
            type="video/webm">
            <source :src="src_mp4"
            type="video/mp4">
            </video>
            <div class="video-modal___text-content"
            >
              <h2 
              class="video-modal__title">  {{ title }} </h2>
              <p
                class="video-modal__description"
              >
             {{ description }}
              </p>
            </div>
    <div
        class="video-modal__btn-group"
      >
        <v-btn
          fab
          depressed
          elevation="0"
          color="andeLightGray"
          class="view-button form-close__btn tour-modal-close video-modal__btn-group"
          @click="close()"
        >&nbsp;</v-btn>
      </div>
</div>
</template>

<script>

export default {
  name: "VideoModal",
  props: {
    inDialog: {
      type: Boolean,
      default: false
    },

    dark: {
      type: Boolean,
      default: false
    },
    src_mp4: {
      type: String,
      default: ''
    },
    src_webm: {
      type: String,
      default: ''
    },
    title:{
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    }, 
    poster:{
      type: String,
      default: ''
    },
  },
  methods: {
    close() {
      return this.$nuxt.$emit('close-dialog', 'video-modal')
    }
  }
};
</script>

<style lang="scss">

.video-modal {
 
    display: flex;
    justify-content: flex-start;
    box-sizing:border-box;
    flex-wrap: wrap;
}
  .video-modal__btn-group{
    position: absolute;
    right:6px;
    top: 6px;
    .v-btn.view-button span {
      background: url(/img/close.svg) center center no-repeat;
    }
    .view-button:after {
      padding-top: 1em;
      content: url(/img/close_white.svg);
    }
  }
  .video-modal__btn-group:hover:after{
    padding-top: 0.5em  !important;
  }
  .video-modal{
  padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 5px;
}
  .video-modal___text-content{
  // border: thin solid #fff;
width: 49%;
padding: 36px;
display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .video-modal__title{
    font-size: 33px;
    color: #fff;
  }
  .video-modal__description{
    color: #fff;
  }



</style>