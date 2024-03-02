<template>

  <div class="tour-modal">
   
    <iframe width="100%" :height="($vuetify.breakpoint.sm||$vuetify.breakpoint.xs)? '95%' :'90%'" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" :src="src"></iframe>
    <div
        class="tour-modal__btn-group"
      >
      <h5 class="move-info">{{action_alert}}</h5>
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
  name: "TourModal",
  props: {
    inDialog: {
      type: Boolean,
      default: false
    },

    dark: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    action_alert: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      return this.$nuxt.$emit('close-dialog', 'tour-modal')
    }
  }
};
</script>

<style lang="scss">

.tour-modal {
  padding-top: 20px;
    padding-bottom: 0;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
  height: 60vh;
  @media only screen and (max-width: 600px){
    height: 43vh;
  }
  @media only screen and (max-width: 960px){
    height: 90vh;
    
  }
}
  .tour-modal__btn-group {
    .v-btn.view-button span {
      background: url(/img/close.svg) center center no-repeat;
    }

    .view-button:after {
      padding-top: 1em;
      content: url(/img/close_white.svg);
    }
    button{
      @media (max-width: 1024px){
        font-size: 0.8em !important;
        margin-top: 0;
      }
    }
  }
  .tour-modal-close{
    margin-top: 5px;
  }
  .form-close__btn:hover:after{
    padding-top: 0.5em  !important;
  }  
.move-info{
  color:#fff;
  margin: 0;
  font-size: 17px;
  font-weight: 500;
}
.tour-modal__btn-group{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1em;
  width: 100%;
}

.tour-dialog{   
   @media only screen and (max-width: 960px){
    margin: 0;
    // overflow: hidden;
    max-height: 100%!important;
    }
}


</style>