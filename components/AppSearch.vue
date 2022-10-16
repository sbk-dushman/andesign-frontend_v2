<template>
 <form @submit.prevent="search"
    class="search-form"
  >
   <input
    ref="search"
    type="search"
    name="search"
    @focus="$emit('input-focus')"
    @blur="$emit('input-blur')"
    :style="inputStyle" v-model="searchLine"
  >
   <button
      type="submit"
      @focus="$emit('input-focus')"
      @blur="$emit('input-blur')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="17.395" height="17.399" viewBox="0 0 17.395 17.399">
        <path id="Shape" d="M16.65,17.4a.747.747,0,0,1-.531-.219l-5.155-5.156a6.75,6.75,0,1,1,1.06-1.06l5.156,5.155a.75.75,0,0,1-.531,1.28ZM6.75,1.5a5.25,5.25,0,1,0,0,10.5,5.217,5.217,0,0,0,3.708-1.533l0,0,0,0A5.25,5.25,0,0,0,6.75,1.5Z" transform="translate(-0.004 0)" fill="#5f6a75"/>
      </svg>
   </button>
   <span
    :style="errorStyle"
    v-show="err"
    >
    {{ err }}
   </span>
 </form>
</template>

<script>
export default {
  name: "AppSearch",
  props: {
    borderColor: {
      type: String,
      default: "transparent"
    },
    fillColor: {
      type: String,
      default: "#fff"
    },
  },
  data () {
    return {
      searchLine: '',
      err: ''
    }
  },
  computed: {
    inputStyle () {
      return 'border-color: ' + this.borderColor + '!important; background-color: ' + this.fillColor + '!important;';
    },
    errorStyle () {
      return 'color: white!important; background-color: ' + this.borderColor + '!important;';
    }
  },
  methods: {
    search () {
      if (this.searchLine.length >= 3) {
        let query = this.searchLine
        this.$refs.search.blur();
        this.searchLine = ''
        this.err=''
        return this.$router.push({name: 'search-line', params: { line: query }})
      }
      this.$refs.search.focus()
      return this.err = 'Введите еще хотя бы ' + (3 - this.searchLine.length) + (this.searchLine.length == 2 ? ' букву' : ' буквы') 
    }
  },
  created() {
    this.$nuxt.$on('click-search-toggle', () => {
      this.$refs.search.focus()
    })
  }
};
</script>

<style lang="scss" scoped>
form {
  vertical-align: middle;
  position: relative;

  input {
    border-radius: 7px;
    border: 2px solid;
    height: 1.875em;
    width: 100%;
    padding: .5em;

    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: .3em;
    padding: .4em;

    &:focus {
      outline: none;
    }
  }

  span {
    position: absolute;
    top: 1.8em;
    left: 0;
    right: 0;
    font-size: .875em;
    text-transform: none!important;
    font-weight: 400!important;
    cursor: auto;
    margin: auto;
    padding: .5em .25em .25em;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
}
</style>