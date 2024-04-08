<template>
  <div class="video-modal">

    <!-- <video id="intro-video"  width="auto"
            height="auto"
            controls="controls" autoplay="false" playsinline  loop="loop" preload="metadata" poster="/img/poster.jpg">
            <source :src="src_webm"
            type="video/webm">
            <source :src="src_mp4"
            type="video/mp4">
            </video> --> 
            <VideoPlayer 
            :options="{    
                          autoplay: true,
                           controls: true,
                           loop:true,
                           width:800,
                            sources: [
                              {
                                src:
                                src_mp4,
                                  type: 'video/mp4'
                              }
                              ]}"        />
 

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
 import VideoPlayer from "./VideoPlayer.vue"
export default {
  name: "VideoModal",

    components: {VideoPlayer,},

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
      videoOptions: {
        // autoplay: true,
        // controls: true,
        sources: [
          {
            src:
              '/path/to/video.mp4',
              type: 'video/mp4'
          }
        ]
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
    flex-wrap: nowrap;
  @media  (max-width: 1500px) {
        flex-wrap: wrap;
        overflow-x: hidden;
        flex-direction: column;
        align-items:center;
      justify-content: space-between;
    }
    @media  (max-width: 600px) {
      
    
    }


}
  .video-modal__btn-group{
    position: absolute;
    right: 13px;
    bottom: 10px;
    margin-top: 0;
    
    .v-btn.view-button span {
      background: url(/img/close.svg) center center no-repeat;
    }
    .view-button:after {
      padding-top: 1em;
      content: url(/img/close_white.svg);
    }
    button{
      @media (max-width: 768px){
        font-size: 0.8em !important;
        margin-top: 0;
      }
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
    @media only screen and (max-width: 1500px) {
      padding: 23px;
      padding-bottom: 0;
    width: 100%;
    }
    @media only screen and (max-width: 1024px) {
      width: 100%;
      padding: 10px;
     
    }
    width: 49%;
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
  }
  .video-modal__title{
    font-size: 33px;
    color: #fff;
    line-height: 3;
    margin-bottom:0;
    @media only screen and (max-width: 768px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 1024px) {
      line-height: 2;
    }
  }
  .video-modal__description{
    color: #fff;
    @media only screen and (max-width: 1024px) {
      font-size: 1em;
    }
  }
  .video-dialog{
    @media only screen and (max-width: 1024px) {
margin: 0;
max-height: 100%!important;
overflow-y: scroll;
     
    }
  }
  



</style>