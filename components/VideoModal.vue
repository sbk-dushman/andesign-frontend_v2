<template>

  <div class="video-modal">
 {{   this.src_mp4}}
 {{   }}
    <video id="intro-video"  class="intro-section__video"  width="100%"
            height="70%"
            controls="controls" autoplay="false" playsinline  loop="loop" preload="auto" poster="/images/index_media/bg.jpg">
            <source :src="this.src_webm+='#t=0.5'"
            type="video/webm">
            <source src="/images/index_media/mainvideo_1.mp4#t=0.5"
            type="video/mp4">
            </video>
    <div
        v-if="inDialog"
        class=" close-button tour-modal__btn-group"
      >
        <v-btn
          fab
          depressed
          elevation="0"
          color="andeLightGray"
          class="view-button form-close__btn tour-modal-close"
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
    srcsrc_mp4: {
      type: String,
      default: ''
    },
    src_webm: {
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

.tour-modal {
  min-width: 70%!important;
  padding-top: 10px;
}
  .close-button {
    .v-btn.view-button span {
      background: url(/img/close.svg) center center no-repeat;
    }

    .view-button:after {
      padding-top: 1em;
      content: url(/img/close_white.svg);
    }
  }
  .form-close__btn:hover:after{
    padding-top: 0.5em  !important;
  }
  .tour-modal-close{
    margin-top: 10px;
  }
  .tour-modal__btn-group{
    display: flex;
    justify-content: center;
  }
  



</style>