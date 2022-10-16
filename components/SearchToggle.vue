<template>
  <div>
    <div class="search-toggle" @mouseover="toggled = true" @mouseleave="toggled = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.395" height="17.399" viewBox="0 0 17.395 17.399">
          <path id="Shape" d="M16.65,17.4a.747.747,0,0,1-.531-.219l-5.155-5.156a6.75,6.75,0,1,1,1.06-1.06l5.156,5.155a.75.75,0,0,1-.531,1.28ZM6.75,1.5a5.25,5.25,0,1,0,0,10.5,5.217,5.217,0,0,0,3.708-1.533l0,0,0,0A5.25,5.25,0,0,0,6.75,1.5Z" transform="translate(-0.004 0)" fill="#5f6a75"/>
        </svg>
      <span
        :class="[{ 'dot-active': toggled }, 'with-dot', 'ease-opacity']"
        >Поиск</span>
      <div
        ref="searchDropdown"
        class="search-dropdown"
        v-show="toggled || focused"
        @click="$refs.searchDropdown.firstChild.firstChild.focus()"
      >
        <app-search @input-focus="focused = true" @input-blur="focused = false" fill-color="#EFF5F7" border-color="#E8AF64" ></app-search>
      </div>
    </div>
  </div>
</template>

<script>
import AppSearch from "@/components/AppSearch.vue";
export default {
  name: "SearchToggle",
  components: {
    AppSearch
  },
  props: {
  },
  data() {
    return {
      toggled: false,
      focused: false
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  vertical-align: middle;
  margin-right: 1em;
}

.search-toggle {
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;

  span {
    color: #5F6A75;
    margin-left: 1em;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .search-dropdown {
    position: absolute;
    padding-top: 4em;
    left: -33%;
    display: block;
    width: 13.375em;

  }

}

.with-dot:before {
  bottom: 0;
  left: -.5em;
}
</style>