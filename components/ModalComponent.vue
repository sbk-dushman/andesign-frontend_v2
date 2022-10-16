<template>
 <v-dialog
    v-model="dialog"
    max-width="588px"
    :dark="dark"
    hide-overlay
  >
    <v-card>
      <v-card-text
        class="pt-4">
        <keep-alive>
          <component :is="componentName" :dark="dark" :inDialog="true" v-bind="dProps"></component>
        </keep-alive>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    componentName: String,
    componentProps: Object
  },
  data () {
    return {
      dialog: false,
      dProps: this.componentProps 
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
    dialog(val) {
      !val && this.$nuxt.$emit('close-dialog', this.componentName)
    }
  },
  created() {
    this.$nuxt.$on('open-dialog', (component, props) => {
      if (this.componentName == component) {
        this.dProps = {...this.dProps, ...props,}
        this.dialog = true
      }
    })
    this.$nuxt.$on('close-dialog', (component) => {
      if (this.componentName == component) {
        this.dialog = false
      }
    })
  }
};
</script>

<style lang="scss" scoped>
</style>