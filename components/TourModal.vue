<template>

  <div class="tour-modals">
    <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" :src="this.src"></iframe>

  <div
        class=" close-button form"
      >
        <v-btn
          fab
          depressed
          elevation="0"
          color="andeLightGray"
          class="view-button form-close__btn"
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
};
</script>

<style lang="scss">

.tour-modals {
  min-width: 70%!important;
}
form.order-form {
  vertical-align: middle;
  position: relative;

  input {
    width: 100%;
    padding: .5em;

      &:focus {
        outline: none;
      }
    }
  
  label {
    display: block;
    color: #fff;
    text-transform: uppercase;
    font-size: .875em;
    font-weight: 600;
  }

  .theme--dark.v-input input, .theme--dark.v-input textarea {
    color: #151D24;
  }

  .theme--dark.v-text-field--solo > .v-input__control > .v-input__slot, .theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
    background: white;
    border-radius: 7px;
    min-height: 1.75em;
  }

  .theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover, .theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {
    background: rgba(255, 255, 255, 0.75)!important;
  }

  .v-btn {

    &.order-button:before {
      background: url("/img/mail_back1.svg") center bottom no-repeat;
      background-size: cover;
    }

    &.order-button:after {
      content: url("/img/mail.svg");
      background: url("/img/mail_back2.svg") center bottom no-repeat;
      background-size: cover;
  
    }
  }

  .attach-button {
    height: 56px;
    flex: 0 0 auto;
    position: relative;
    
    &.empty::before {
      content: "Приложить файлы";
      position: absolute;
      width: 6em;
      left: 56px;
      margin: .4em;
    }

    &.empty:after {
      content: "";
      position: absolute;
      margin: 0;
      height: 100%;
      right: -4em;
      width: 6em;
      background: #151d24;
      transition: 0.1s all 0.5s ease-out;
    }

    &.empty:hover::after {
      width: 0;
    }

    fieldset {
      display: none;
    }

    & .v-input__prepend-outer {
      margin: 0;
    }

    .v-input__icon--prepend {
      height: 56px;
      flex: 1 0 auto;
      justify-content: center;
      min-width: 28px;
      width: 56px;
    }
    
    .v-icon.mdi-paperclip {

      z-index: 1;
      width: 56px;
      height: 56px;
      overflow: hidden;
      border: solid 1px white;
      border-radius: 9999px;
      
      &::before {
        content: "";
        width: 56px;
        height: 56px;
        border-radius: 9999px;
        background-color: transparent;
        background-image: url("/img/mail_back1.svg");
        background-repeat: no-repeat;
        background-position: center -134px;
        transition: .2s all .2s ease-out;
        opacity: 1;
      }

      &::after {
        content: url("/img/attach.svg");
        position: absolute;
        background-color: transparent;
        background-image: url("/img/mail_back2.svg");
        background-repeat: no-repeat;
        background-position: center -134px;
        transition: .4s all .2s ease-in;
        opacity: 1;
        width: 56px;
        height: 56px;
        border-radius: 9999px;
        padding:.666667em;
        transform: scale(1);
      }

      &:hover::before, &:hover::after {
        background-position: center top;
      }
    }

    .v-input__slot {
      margin:0 0 0 8px;
    }

    &.v-text-field > .v-input__control > .v-input__slot:before, &.v-text-field > .v-input__control > .v-input__slot:after {
      display: none;
    }

    &.v-text-field.v-text-field--enclosed .v-text-field__details {
      margin: 0;
    }
  }
  

  .theme--light.v-btn.v-btn--disabled, .theme--dark.v-btn.v-btn--disabled {
    color: rgba(255, 255, 255, 0.5) !important;

    span {
      color: rgba(255, 255, 255, 0.5) !important;
    }
  }
  
  div.close-button {
        
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


}
</style>