<template>
  <div>
    <v-menu
      bottom
      open-on-hover
      offset-y
      origin="left top"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="contacts-toggle"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="18.5" viewBox="0 0 15.5 18.5">
            <g id="Outline_Navigation_Map-location" data-name="Outline / Navigation /Map-location" transform="translate(-4.25 -2.25)">
              <g id="Map-location" transform="translate(4 2)">
                <path id="Shape" d="M3.75,7.5A3.75,3.75,0,1,1,7.5,3.75,3.754,3.754,0,0,1,3.75,7.5Zm0-6A2.25,2.25,0,1,0,6,3.75,2.253,2.253,0,0,0,3.75,1.5Z" transform="translate(4.25 3.25)" fill="#5f6a75"/>
                <path id="Shape-2" data-name="Shape" d="M6.567,15.876A1.822,1.822,0,0,1,5.152,15.2l-3.595-4.4A6.865,6.865,0,0,1,.023,5.877,6.4,6.4,0,0,1,6.405,0h.324A6.4,6.4,0,0,1,13.11,5.877a6.862,6.862,0,0,1-1.534,4.931L7.982,15.2A1.822,1.822,0,0,1,6.567,15.876ZM6.405,1.5A4.9,4.9,0,0,0,1.518,6a5.366,5.366,0,0,0,1.2,3.858l3.6,4.4a.327.327,0,0,0,.507,0l3.6-4.4A5.366,5.366,0,0,0,11.615,6,4.9,4.9,0,0,0,6.729,1.5Z" transform="translate(1.433 0.25)" fill="#5f6a75"/>
                <path id="Path" d="M3.421,1.086A.75.75,0,0,0,2.079.415l-2,4A.75.75,0,0,0,.75,5.5h14a.75.75,0,0,0,.671-1.085l-2-4a.75.75,0,1,0-1.342.671L13.537,4H1.964Z" transform="translate(0.25 13.25)" fill="#5f6a75"/>
              </g>
            </g>
          </svg>
          <span :class="[{ 'dot-active': toggled}, 'with-dot ease-height']">Контакты</span>
        </div>
      </template>
      <v-list
        dense
        color="andeDarkOrange"
        rounded
        class="contacts-list"
      >
        <v-list-item>
          <v-list-item-icon
            class="mr-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13.501" height="21.13" viewBox="0 0 13.501 21.13">
              <g id="Mobile-phone" transform="translate(-5.25 -1.43)">
                <g id="Mobile-phone-2" data-name="Mobile-phone" transform="translate(5 1)">
                  <path id="Shape" d="M6.75,21.13a33.509,33.509,0,0,1-3.591-.194,3.367,3.367,0,0,1-3-3.262L0,10.57l.006-.256L0,10.07l.006-.256L0,9.57l.006-.256L0,9.07l.164-6.1c0-.093.009-.175.018-.252l0-.035,0-.029A2.648,2.648,0,0,1,1.391.682c.046-.031.1-.062.152-.095S1.641.532,1.7.5A2.86,2.86,0,0,1,2.778.183C4.093.061,5.43,0,6.75,0s2.657.062,3.972.183A2.848,2.848,0,0,1,11.8.5c.058.03.114.061.156.086s.106.063.157.1a2.647,2.647,0,0,1,1.2,1.966l.008.074c.01.09.015.171.017.248l.165,6.1-.007.243.007.256-.006.244.006.257-.006.245.006.255-.163,7.1a3.369,3.369,0,0,1-3,3.262A33.528,33.528,0,0,1,6.75,21.13Zm0-3.859a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,6.75,17.27Zm0-15.727a37.642,37.642,0,0,0-4.037.218,1.151,1.151,0,0,0-.411.125,1.376,1.376,0,0,0-.624.96c0,.007,0,.014,0,.022s0,.015,0,.023L1.519,9.758l.127,4.73a2.1,2.1,0,0,0,1.907,2.035c1.058.1,2.134.147,3.2.147s2.139-.05,3.2-.147a2.1,2.1,0,0,0,1.906-2.035l.128-4.73-.158-6.866c0-.014,0-.03,0-.044a1.377,1.377,0,0,0-.623-.96,1.153,1.153,0,0,0-.412-.125A37.642,37.642,0,0,0,6.75,1.543Z" transform="translate(0.25 0.43)" fill="#fff"/>
                </g>
              </g>
            </svg>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <a
                href="tel:+74957979473"
                target="_blank"
                class="white--text"
              >
                <b>+7 (495) 797 94 73</b>
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon
            class="mr-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18.778" height="15.094" viewBox="0 0 18.778 15.094">
              <g id="Envelope" transform="translate(-2.611 -4.453)">
                <g id="Envelope-2" data-name="Envelope" transform="translate(2 4)">
                  <path id="Shape" d="M9.389,15.094c-1.573,0-3.165-.069-4.733-.206l-1.51-.13A3.13,3.13,0,0,1,.315,12.1,33.554,33.554,0,0,1,.193,3.9c.034-.286.074-.581.122-.9A3.13,3.13,0,0,1,3.146.337L4.657.205C6.224.069,7.816,0,9.389,0s3.165.069,4.733.205l1.51.131A3.13,3.13,0,0,1,18.464,3c.045.3.086.6.122.9a33.5,33.5,0,0,1-.122,8.2,3.13,3.13,0,0,1-2.831,2.66l-1.51.13C12.555,15.024,10.962,15.094,9.389,15.094ZM1.58,5.067A29.151,29.151,0,0,0,1.8,11.875a1.633,1.633,0,0,0,1.478,1.388l1.51.131c1.524.133,3.073.2,4.6.2s3.078-.067,4.6-.2l1.51-.131a1.633,1.633,0,0,0,1.478-1.388A29.1,29.1,0,0,0,17.2,5.067L12.182,7.853a5.751,5.751,0,0,1-5.585,0ZM9.389,1.5c-1.53,0-3.078.067-4.6.2l-1.51.13A1.633,1.633,0,0,0,1.8,3.219c-.012.077-.023.156-.034.233l5.561,3.09a4.252,4.252,0,0,0,4.128,0l5.56-3.09c-.011-.077-.023-.156-.034-.233A1.633,1.633,0,0,0,15.5,1.831l-1.51-.13C12.467,1.568,10.919,1.5,9.389,1.5Z" transform="translate(0.611 0.453)" fill="#fff"/>
                </g>
              </g>
            </svg>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <a
                href="mailto:info@andesign.ru"
                target="_blank"
                class="white--text"
              >
                info@andesign.ru
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon
            class="mr-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17.012" height="20.667" viewBox="0 0 17.012 20.667">
              <g id="Location" transform="translate(-3.494 -1.25)">
                <g id="Location-2" data-name="Location" transform="translate(3 1)">
                  <path id="Shape" d="M4.75,9.5A4.75,4.75,0,1,1,9.5,4.75,4.756,4.756,0,0,1,4.75,9.5Zm0-8A3.25,3.25,0,1,0,8,4.75,3.254,3.254,0,0,0,4.75,1.5Z" transform="translate(4.25 4.25)" fill="#fff"/>
                  <path id="Shape-2" data-name="Shape" d="M8.506,20.667a2.178,2.178,0,0,1-1.693-.8L2.02,14a8.9,8.9,0,0,1-1.989-6.4A8.287,8.287,0,0,1,8.29,0h.432a8.287,8.287,0,0,1,8.259,7.607A8.9,8.9,0,0,1,14.992,14L10.2,19.865A2.178,2.178,0,0,1,8.506,20.667ZM8.29,1.5A6.787,6.787,0,0,0,1.526,7.73a7.4,7.4,0,0,0,1.656,5.323l4.793,5.863a.688.688,0,0,0,1.064,0l4.792-5.863A7.4,7.4,0,0,0,15.486,7.73,6.787,6.787,0,0,0,8.722,1.5Z" transform="translate(0.494 0.25)" fill="#fff"/>
                </g>
              </g>
            </svg>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><span>127410, г. Москва,<br />ул. Поморская,<br />д. 39, стр. 1</span></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon
            class="mr-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="18.5" viewBox="0 0 15.5 18.5">
              <g id="Outline_Navigation_Map-location" data-name="Outline / Navigation /Map-location" transform="translate(-4.25 -2.25)">
                <g id="Map-location" transform="translate(4 2)">
                  <path id="Shape" d="M3.75,7.5A3.75,3.75,0,1,1,7.5,3.75,3.754,3.754,0,0,1,3.75,7.5Zm0-6A2.25,2.25,0,1,0,6,3.75,2.253,2.253,0,0,0,3.75,1.5Z" transform="translate(4.25 3.25)" fill="#fff"/>
                  <path id="Shape-2" data-name="Shape" d="M6.567,15.876A1.822,1.822,0,0,1,5.152,15.2l-3.595-4.4A6.865,6.865,0,0,1,.023,5.877,6.4,6.4,0,0,1,6.405,0h.324A6.4,6.4,0,0,1,13.11,5.877a6.862,6.862,0,0,1-1.534,4.931L7.982,15.2A1.822,1.822,0,0,1,6.567,15.876ZM6.405,1.5A4.9,4.9,0,0,0,1.518,6a5.366,5.366,0,0,0,1.2,3.858l3.6,4.4a.327.327,0,0,0,.507,0l3.6-4.4A5.366,5.366,0,0,0,11.615,6,4.9,4.9,0,0,0,6.729,1.5Z" transform="translate(1.433 0.25)" fill="#fff"/>
                  <path id="Path" d="M3.421,1.086A.75.75,0,0,0,2.079.415l-2,4A.75.75,0,0,0,.75,5.5h14a.75.75,0,0,0,.671-1.085l-2-4a.75.75,0,1,0-1.342.671L13.537,4H1.964Z" transform="translate(0.25 13.25)" fill="#fff"/>
                </g>
              </g>
            </svg>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><a @click="$vuetify.goTo('#map-section', options)" class="with-dot smaller white--text">НА КАРТЕ</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "NavContacts",
  props: {
  },
  data() {
    return {
      toggled: false,
      focused: false
    }
  },
  computed: {
    options () {
      return {
        offset: 96,
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  vertical-align: middle;
}

.contacts-toggle {
  display: flex;
  align-items: center;
  position: relative;

  span {
    color: #5F6A75;
    margin-left: 1em;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

a, span {
  color: white;
  font-size: 16px;
}

a:active, a:focus, a:visited {
  color: white;
}

.smaller {
  font-size: 14px;

  &:before {
    z-index: 0;
  }
}

.contacts-list {
  min-height: 281px;
  padding: 2em 0;

  .v-list-item__content, .v-list-item__title {
    overflow: visible;
  }
}

.with-dot:before {
  bottom: 0;
  left: -.5em;
}

</style>