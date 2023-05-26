<template>

  <div class="video-modal">
 {{   this.src_mp4}}
 {{   }}
    <video id="intro-video"  class="intro-section__video"  width="auto"
            height="auto"
            controls="controls" autoplay="false" playsinline  loop="loop" preload="metadata" poster="/images/index_media/bg.jpg">
            <source :src="this.src_webm+='#t=0.5'"
            type="video/webm">
            <source src="/images/index_media/mainvideo_1.mp4#t=0.5"
            type="video/mp4">
            </video>
            <div class="video-modal___text-content"
            >
              <h2 
              class="video-modal__title"> ДИЗАЙН </h2>
              <p
                class="video-modal__description"
              >
              Мы профессионально занимаемся изготовлением авторской мебели, воплощая в жизнь самые необычные дизайнерские проекты эксклюзивных элементов интерьера.

Разрабатываем, производим и оснащаем мебелью рестораны, кафе, бары, номерной фонд отелей, апарт-комплексов и гостевых домов, а также ведем их последующее сопровождение и обслуживание.
              </p>
            </div>
    <div
        v-if="inDialog"
        class=" close-button tour-modal__btn-group"
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

.video-modal {
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    box-sizing:border-box;
    flex-wrap: wrap;

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
  .video-modal__btn-group{
    width: 100%;
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