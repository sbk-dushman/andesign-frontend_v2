<template>
 <v-form
    v-model="valid"
    @submit.prevent="submitForm"
    lazy-validation
    :ref="inDialog ? 'orderFormModal' : 'orderForm'"
    class="order-form"
  >
    <label
      for="name"
      class="mb-1"
    >
      От кого
    </label>
    <v-text-field
      v-model="form.Name"
      filled
      solo
      flat
      name="name"
      id="name"
      required
    />
    <label
      for="contact"
      class="mb-1"
    >
      Телефон/E-mail
    </label>
    <v-text-field
      v-model="form.contact"
      filled
      solo
      flat
      :rules="contactRules"
      id="contact"
      name="contact"
      required
    />
    <label
      for="message"
      class="mb-1"
    >
      Сообщение
    </label>
    <v-textarea
      v-model="form.message"
      filled
      solo
      flat
      auto-grow
      rows="7"
      background-color="white"
      color="andeDarkGray"
      id="message"
      name="message"
    />
    <label
      v-show="false"
      for="company"
    >Компания</label>
    <v-text-field
      v-show="false"
      v-model="honeypot"
      id="company"
      name="company"
    />
    <div
      class="d-flex"
    >
      <v-btn
        :disabled="!valid || sending"
        elevation="0"
        outlined
        rounded
        depressed
        height="56px"
        width="11.75vw"
        color="white"
        type="submit"
        class="white--text view-button order-button"
      >
        Отправить
      </v-btn>
      <v-file-input
        v-if="allowUpload"
        v-model="form.Attach"
        truncate-length="16"
        dark
        height="56px"
        accept="image/*"
        :class="[{'empty' : !form.Attach}, 'ml-6', 'mr-auto', 'my-0', 'py-0', 'attach-button']"
      >
      </v-file-input>
      <div
        v-if="inDialog"
        class="close-button"
      >
        <v-btn
          fab
          depressed
          elevation="0"
          color="andeLightGray"
          class="view-button"
          @click="close()"
        >&nbsp;</v-btn>
      </div>
    </div>
    <p
      class="white--text"
      v-show="sending">
      Отправляю
    </p>
    <p
      :class=" (status == 'mail_sent') ? 'green--text' : 'red--text'"
      v-show="response"
      v-html="response" />
  </v-form>
</template>

<script>
import axios from "axios"

export default {
  name: "OrderForm",
  props: {
    inDialog: {
      type: Boolean,
      default: false
    },
    allowUpload: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      valid: false,
      response: '',
      status: '',
      honeypot: '',
      sending: false,
      form: {
        Name: '',
        contact: '',
        message: this.message,
        Attach: null
      },
      contactRules: [
        v => !!v || 'Укажите E-mail или телефон'
      ]
    }
  },
  computed: {
  },
  methods: {
    attach() {
      console.log('attach')
    },
    async submitForm() {
      if (!this.honeypot && !this.sending) {
        this.sending = true
        this.response = ''
        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          formData.append(key, this.form[key])
        });
        const res = await axios.post('https://admin.andesign.ru/wp-json/contact-form-7/v1/contact-forms/242/feedback', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((Response) => {
          this.response = Response.data.message
          this.status = Response.data.status

          this.form = {
            Name: '',
            contact: '',
            message: '',
            Attach: null
          }

          this.valid = true
          this.sending = false
          
          this.$refs[0].resetValidation()
        })
          .catch((err) => {
            console.log(err)
          });
      }
    },
    close() {
      return this.$nuxt.$emit('close-dialog', 'order-form')
    }
  },
  mounted() {
    this.$nuxt.$on('set-message', (message) => {
      console.log('setting-message:', message)
      this.form.message = 'Привет, хочу заказать ' + message +'!'
    })
    if (this.inDialog) {
      this.$nuxt.$on('close-dialog', (component) => {
        if (component == 'order-form') this.$refs.orderFormModal.resetValidation()
      })
    }
  }
};
</script>

<style lang="scss">
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
}
</style>