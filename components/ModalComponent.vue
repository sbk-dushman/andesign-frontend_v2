 <template> <!--558px -->
 <v-dialog

    v-model="dialog"
    :max-width= "maxWidth"
    :dark="dark"
    hide-overlay
    :class="dClass"
  
  >
    <v-card   >
      <v-card-text
        class="pt-4">
        <keep-alive>
          <component :is="componentName" :dark="dark" :inDialog="true" v-bind="dProps" :key="componentKey"></component>
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
    maxWidth:{
      type:String,
      default:''
    },
    dClass:{
      type:String,
      default:''
    },
    componentProps: Object
  },
  data () {
    return {
      dialog: false,
      dProps: this.componentProps,
      componentKey: 0,
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
        this.componentKey += 1; 
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