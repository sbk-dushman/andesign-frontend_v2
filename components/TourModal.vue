<template>

  <div class="tour-modal">
   
    <iframe width="100%" height="580" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" :src="src"></iframe>
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
  // min-width: 70%!important;
  padding-left: 10px;
  
}
  .tour-modal__btn-group {
    .v-btn.view-button span {
      background: url(/img/close.svg) center center no-repeat;
    }

    .view-button:after {
      padding-top: 1em;
      content: url(/img/close_white.svg);
    }
  }
  .tour-modal-close{
    margin-top: 5px;
  }
  .form-close__btn:hover:after{
    padding-top: 0.5em  !important;
  }  
.tour-modal{
  padding-top: 20px;
    padding-bottom: 0;
    padding-left: 5px;
}
.move-info{
  color:#fff;
  margin: 0;
}
.tour-modal__btn-group{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tour-dialog{
  
}


</style>