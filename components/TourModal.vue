<template>

  <div class="tour-modal">
   
    <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" :src="this.src"></iframe>
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