<template>
  <div class="nav-container">
    <v-app-bar 
      :class="[{'order-form-active' : orderFormActive}, {'sidebar-active' : sidebar}, 'nav']"
      fixed
      flat
      clipped-right
      :height="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 70 : 96"
      :color="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'transparent' : 'white'"
      tag="nav"
    >
      <v-container
        fluid
      >
        <v-row>
          <v-col
            cols="6"
            md="3"
            lg="2"
          >
            <v-app-bar-title>
              <nuxt-link
                exact
                to="/"
              >
                <app-icon :brand="brand"></app-icon>
              </nuxt-link>
            </v-app-bar-title>
          </v-col>
          <v-col
            cols="6"
            class="d-flex d-md-none"
          >
            <v-spacer/>  
            <v-app-bar-nav-icon
              @click="drawer = !drawer"
              :class="[{'is-active': drawer}, 'hamburger hamburger--spring']"
              :ripple="false"
            >
              <span
                class="hamburger-box"
              >
                <span
                  class="hamburger-inner"
                />
              </span>
            </v-app-bar-nav-icon>
          </v-col>
          <v-col
            md="9"
            class="d-none d-md-block d-lg-none"
          >
            <v-slide-group
              class="nav-menu"
              show-arrows
            >
              <v-slide-item
                v-for="link in navItems"
                :key="link.slug"
                class="mx-5"
              >
                <span
                  v-if="$route.name === 'index'"
                  @click="$vuetify.goTo('#'+link.slug)"
                  class="with-dot ease-width"
                >
                  {{ link.name }}
                </span>
                <nuxt-link
                  v-else
                  :to="'/' + link.slug"
                  class="with-dot ease-width"
                >
                  {{ link.name }}
                </nuxt-link>
              </v-slide-item>
              <template v-slot:prev>
                <v-btn
                  fab
                  depressed
                  elevation="0"
                  color="andeLightGray"
                  class="prev-button"
                  ref="prevMenuItem"
                >&nbsp;</v-btn>
              </template>
              <template v-slot:next>
                <v-btn
                  fab
                  depressed
                  elevation="0"
                  color="andeLightGray"
                  class="next-button"
                  ref="nextMenuItem"
                >&nbsp;</v-btn>
              </template>
            </v-slide-group>
          </v-col>
          <v-col
            cols="12"
            lg="7"
            class="d-none d-lg-block"
          >
            <ul class="nav-menu">
              <li v-for="link in navItems" :key="link.slug">
                <span
                  v-if="$route.name === 'index'"
                  @click="$vuetify.goTo('#'+link.slug)"
                  class="with-dot ease-width"
                >
                  {{ link.name }}
                </span>
                <nuxt-link
                  v-else
                  :to="'/' + link.slug"
                  class="with-dot ease-width">
                    {{ link.name }}
                  </nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="12"
            lg="3"
            xl="2"
            offset-xl="1"
            class="d-none d-lg-block"
          >
          <ul>
            <li>
              <search-toggle />
            </li>
            <li>
              <nav-contacts />
            </li>
          </ul>
          </v-col>
        </v-row>
      </v-container>
      <nav-presentations />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      floating
      rounded
      right
      hide-overlay
      dark
      class="d-flex d-md-none andeDarkOrange drawer pt-10"
    >
      <v-container
        fluid
        >
        <v-row>
          <v-col>
            <v-list
              nav
            >
              <v-list-item-group
                v-if="$route.name === 'index'"
                v-model="group"
                theme="dark"
              >
                <v-list-item
                  v-for="link in navItems"
                  :key="link.slug"
                    @click="$vuetify.goTo('#'+link.slug)"
                >
                  <span
                    class="with-dot ease-width white--text"
                  >
                    {{ link.name }}
                  </span>
                </v-list-item>
              </v-list-item-group>
              <v-list-item-group
                v-else
                v-model="group"
                theme="dark"
              >
                <v-list-item
                  v-for="link in navItems"
                  :key="link.slug"
                  :to="'/' + link.slug"
                >
                  <span
                    class="with-dot ease-width white--text"
                  >
                    {{ link.name }}
                  </span>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-spacer />
            <p
              class="white--text font-weight-bold mb-2"
            >
              ПОИСК
            </p>
            <app-search />
            <p
              class="white--text font-weight-bold mb-2"
            >
              КОНТАКТЫ
            </p>
            <v-list
              dense
              color="transparent"
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
                      <b>
                        +7 (495) 797 94 73
                      </b>
                    </a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon
                  class="mr-1 mt-4"
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
                  <v-list-item-title>
                    <a
                      href="https://goo.gl/maps/3YYArR5eeEWbKQvU8"
                      target="_blank"
                      class="white--text"
                    >
                      127410, г. Москва,
                      <br />ул. Поморская,
                      <br />д. 39, стр. 1
                    </a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import AppIcon from "./AppIcon.vue"
  import SearchToggle from "./SearchToggle.vue"
  import NavContacts from "./NavContacts.vue"
  import NavPresentations from "./NavPresentations.vue"

  export default {
    name: "AppNav",
    components: {
      AppIcon,
      SearchToggle,
      NavContacts,
      NavPresentations
    },
    props: {
      categories: {
        type: Array,
        default: () => [
          {}
        ]
      }
    },
    data(){
      return {
        brand: 'ЭндиЗайн',
        orderFormActive: false,
        sidebar: false,
        group: null,
        drawer: false,
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    computed: {
      navItems() {
        return this.categories.filter( cat => cat.parent === 0 )
      },
      presentations() {
        return this.navItems.map( value => value.acf.file)
      }
    },
    created() {
      this.$nuxt.$on('open-dialog', () => {
        this.orderFormActive = true
      })
      this.$nuxt.$on('close-dialog', () => {
        this.orderFormActive = false
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/hamburgers.min.css";

  .nav {
    color: #000;
    border-bottom-left-radius: 2em!important;
    border-bottom-right-radius: 2em!important;
    transition: height .5s ease-out, background-color .5s ease-out;
    z-index: 8 !important;

    @media only screen and (min-width: 960px) {
      background-color: rgba(255, 255, 255, 0.75)!important;
    }

    .container {
      padding: .75em .25em;

      @media only screen and (min-width: 960px) {
        padding: .75em .5em;
      }

      @media only screen and (min-width: 1424px) {
        padding: .75em 3em;
      }

      .row {
        align-items: center;
      }
    }

    a, span {
      color: #5F6A75;
      font-size: 14px;
      font-weight: bold;
    }

    .v-btn.v-btn--icon.hamburger {
      content: "";
      width: 56px;
      height: 56px;
      background-color: var(--v-andeDarkOrange-base);
      border-radius: 9999px;

      &:hover, &.is-active:hover {
        opacity: 1;
      }

      &::before, &:focus::before, &:hover::before {
        content:none;
      }

      &.is-active:hover {
        opacity: 1;
      }

      i {
        color: white;
      }
      
      .hamburger-box {
        width: 26px;
        height: 22px;

        .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
          background-color: white;
          width: 26px;
          height: 2px;
        }
      }
    }

    &.order-form-active {
      height:100vh!important;
    }
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    @media only screen and (min-width: 960px) {
      .nav {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.75);
        transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);
      }
    }
  }

  ul {
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    padding-left:0;
    flex-wrap: wrap;

    &.nav-menu {
      justify-content: space-between;
    }

    li {
      display: flex;
      align-items: center;

      a, span {
        position: relative;
        text-transform: uppercase;
        margin: 0 16px 0 0;
        cursor: pointer;
      }

      &:last-child span, &:last-child a {
        margin: 0;
      }
    }
  }

  .with-dot:before {
    bottom: 0;
    left: -.5em;
  }

  .with-dot.ease-width:hover:before, .nuxt-link-active:before, .with-dot.dot-active.ease-width:before, .v-list-item--active .with-dot.ease-width:before {
    width: calc(100% + 1em);
  }

  .drawer {
    position: fixed;
    span, a {
      text-transform: uppercase;
    }
    .v-list-item--active:before {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 960px) {
    .v-app-bar--is-scrolled .v-app-bar-title {
      display: none;
    }
  }
</style>

<style lang="scss">
  .nav-menu.v-slide-group {
    .v-slide-group__prev--disabled, .v-slide-group__next--disabled {
      display: none !important;
    }

    .v-slide-group__content {

      height: 1em;
      align-self: center;

      a, span {
        position: relative;
        text-transform: uppercase;
        margin: 0 2em;
        cursor: pointer;
      }

      &:last-child span, &:last-child a {
        margin: 0;
      }
    }

    .v-btn {
      z-index: 1;
      overflow: hidden;
      width: 56px;
      height: 56px;
      border-radius: 9999px;

      &.prev-button {
        margin-right: 0;
      }

      &.next-button {
        margin-left: 0;
      }
    }
  
    .prev-button::before, .next-button::before {
      content: "";
      width: 56px;
      height: 56px;
      border-radius: 9999px;
      transition: .2s all .2s ease-out;
      opacity: 1;
      background-color: var(--v-andeDarkOrange-base);
    }

    .prev-button:active::before, .next-button:active::before {
      background-position: center top;
      background-color: currentColor;
    }

    .prev-button::after, .next-button::after {
      content: url("/img/forward.svg");
      position: absolute;
      transition: .4s all .2s ease-in;
      opacity: 1;
      width: 56px;
      height: 56px;
      border-radius: 9999px;
      padding: 10px 20px;
    }

    .prev-button::after {
      content: url("/img/back.svg");
      padding: 10px 8px;
    }

    .next-button:hover::after, .prev-button:hover::after {
      background-position: center top;
    }
  }
</style>