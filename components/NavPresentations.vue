<template>
  <div class="presentation-menu">
    <v-menu
      bottom
      open-on-hover
      origin="top"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="presentations-toggle andeTeal rounded-b-pill"
        >
          <span
            class="d-md-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="17.5" viewBox="0 0 15.5 17.5">
              <g id="Outline_Files_Download" data-name="Outline / Files /Download" transform="translate(-4.25 -3.25)">
                <g id="Download" transform="translate(4 3)">
                  <path id="Shape" d="M5.768,13.353a1.376,1.376,0,0,1-.809-.261l-.6-.428A15.983,15.983,0,0,1,.2,8.268a1.26,1.26,0,0,1,.97-1.935l1.49-.109.235-.016h.017A37.362,37.362,0,0,1,3.02,1.362,1.484,1.484,0,0,1,4.506,0H7.031A1.484,1.484,0,0,1,8.517,1.362a37.2,37.2,0,0,1,.107,4.846l.127.008.125.009,1.49.109a1.26,1.26,0,0,1,.97,1.935,15.992,15.992,0,0,1-4.162,4.395l-.6.428A1.379,1.379,0,0,1,5.768,13.353ZM4.514,1.5A35.805,35.805,0,0,0,4.45,6.864a.75.75,0,0,1-.711.8c-.322.015-.648.035-.97.059L1.687,7.8a14.543,14.543,0,0,0,3.551,3.646l.531.382.532-.382A14.522,14.522,0,0,0,9.85,7.8L8.768,7.721C8.446,7.7,8.12,7.677,7.8,7.662a.75.75,0,0,1-.712-.8A35.685,35.685,0,0,0,7.024,1.5Z" transform="translate(2.232 0.25)" fill="#f6fbfb"/>
                  <path id="Path" d="M1.5.75A.75.75,0,0,0,0,.75v2A1.75,1.75,0,0,0,1.75,4.5h12A1.75,1.75,0,0,0,15.5,2.75v-2a.75.75,0,0,0-1.5,0v2a.25.25,0,0,1-.25.25h-12a.25.25,0,0,1-.25-.25Z" transform="translate(0.25 13.25)" fill="#f6fbfb"/>
                </g>
              </g>
            </svg>
          </span>
          <span
            class="white--text d-none d-md-inline"
          >Презентации</span>
        </div>
      </template>
      <v-list
        dense
        color="andeTeal"
        rounded
        class="presentations-list"
      >
        <v-list-item
          v-for="page in pagesWithPresentations"
          :key="page.id"
          :href="page.acf.file"
          target="_blank"
          class="text-uppercase"
        >
          <span>
            {{ page.title.rendered }}
          </span>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "NavPresentations",
  props: {
  },
  data() {
    return {
      toggled: false,
      focused: false
    }
  },
  computed: {
    pagesWithPresentations() {
      return this.$store.state.pages.filter( page => page.acf.file )
    }
  }
};
</script>

<style lang="scss" scoped>
.menuable__content__active {
  z-index: 0!important;
}

div {
  vertical-align: middle;
}

.presentations-toggle {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: -2em;
  height: 4em;
  padding: .5em 1em;
  min-width: 56px;
  right: calc(0.25em + 16px);
  z-index: -1;

  @media only screen and (min-width: 960px) {
    align-items: center;
    bottom: -3em;
    height: 3em;
    right: calc(0.5em + 16px);
    padding: 0 2.5em;
  }

  @media only screen and (min-width: 1424px) {
    right: calc(3em + 16px);
  }

  span {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

a, span {
  color: white;
  font-size: 14px;
}

a:active, a:focus, a:visited {
  color: white;
}

.presentations-list {

  padding: 4em 0 2em;

  .v-list-item__content, .v-list-item__title {
    overflow: visible;
  }
}

</style>