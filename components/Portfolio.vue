<template>
  <section class="portfolio" id="portfolio">
    <v-container
      fluid
    >
      <v-row
        v-for="(category, index) in parentCategories"
        :key="category.id"
        :class="[{'has-portfolio': category.count > 1 }, category.acf.theme, 'category']"
        :id="category.slug"
      >
        <v-col
          cols="12"
          md="4"
          offset-lg="1"
        >
          <div 
            class="d-flex flex-column"
            :style="'min-height: ' + (($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? '0' : $vuetify.breakpoint.md ? '24.5625em' : '32em')"
          >
            <img
              :src="category.acf.cat_icon"
              class="category-icon"
            />
            <hr
              width="45px"
              class="andeTeal my-2"
            >
            <h2>{{ category.name }}</h2>
            <v-spacer />
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
                :lg="category.count === 1 ? 8 : 6"
                class="subcategories d-flex flex-column"
              >
                <ul
                  v-if="category.count > 1"
                >
                  <li v-for="child in getCategoryChildren(category.id)"
                    :key="child.id"
                  >
                    <nuxt-link
                      :to="{ name: 'slug', params: { slug: category.slug, option: child.id } }"
                      class="with-dot ease-width"
                    >
                      {{ child.name }}
                    </nuxt-link>
                  </li>
                </ul>
                <v-btn
                  color="andeTeal"
                  rounded
                  depressed
                  :class="[{'mb-auto': category.count > 1 }, {'mb-8': category.count === 1 }, 'white--text', 'view-button', 'mt-2']"
                  :to="{ path: '/' + category.slug }"
                ><span>Смотреть</span></v-btn>
                <p
                  v-if="category.count === 1"
                  class="mb-auto"
                  v-html="category.description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
                />
                <div
                  class="mt-12 d-none d-md-flex flex-row justify-center"
                  v-if="index !== parentCategories.length - 1"
                >
                  <hr
                    width="7px"
                    class="andeLightGray mr-1 ml-16"
                  >
                  <hr
                    width="45px"
                    class="andeLightGray"
                  >
                </div>
              </v-col>
              <v-col
                v-if="category.count > 1"
                cols="12"
                sm="6"
                md="12"
                lg="6"
                class="category-description d-flex align-md-end"
              >
                <p
                  class="mb-md-0 mt-0 mt-md-2"
                  v-html="category.description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
                />
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col
          v-if="category.count > 1"
          cols="12"
          md="8"
          lg="7"
          class="slider-container"
        >
          <portfolio-slider :category="category.id" :theme="category.acf.theme" :rowIndex="index" />
        </v-col>
        <div
          class="my-6 mx-auto d-flex d-md-none flex-row justify-center"
        >
          <hr
            width="7px"
            class="andeLightGray mr-1"
          >
          <hr
            width="45px"
            class="andeLightGray"
          >
        </div>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <case-viewer :pCase="pCase" />
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dialog: false,
      pCase: {
        acf: {
          description: '',
          media: []
        },
        categories: [],
        content: {
          rendered: ''
        },
        title: {
          rendered: ''
        },

      }
    };
  },
  computed: {
    parentCategories() {
      return this.categories.filter( cat => cat.parent == 0 )
    }
  },
  created() {
    this.$nuxt.$on('open-case-viewer', (pCase) => {
      this.pCase = Object.assign({}, pCase)
      this.dialog = true
    })
    this.$nuxt.$on('close-case-viewer', () => {
      this.pCase= {
        acf: {
          description: '',
          media: []
        },
        categories: [],
        content: {
          rendered: ''
        },
        title: {
          rendered: ''
        },
      }
      this.dialog = false
    })
  },
  methods: {
    getCategoryChildren (id) {
      return this.categories.filter( cat => cat.parent == id )
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
section.portfolio {
  display: flex;
  position: relative;
  
  @media only screen and (min-width: 960px) {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: url('/img/index_left.png') no-repeat, url('/img/index_right.png') no-repeat;
      background-position: -47% 20vh, 143% -14vh;
      mix-blend-mode: darken;
      transform: rotate(180deg);
    }
  }

  @media only screen and (min-width: 1424px) {
    &::before {
      background-position: -10% 20vh, 112% -14vh;
    }
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1em;
    font-size: 30px;
    @media only screen and (min-width: 960px) {
      @include fluid-type(font-size, 960px, 1440px, 30px, 55px);
    }
  }

  .container {
    padding: 2.5em 1.25em;
    position: relative;
    @media only screen and (min-width: 960px) {
      padding: 0 1.5em 2.5em;
    }
    @media only screen and (min-width: 1424px) {
      padding: 0 4em 2.5em;
    }
  }

  .category {
    padding: 3em 0 0;// 1.25em;
    // margin-right: -1.25em;
    // margin-left: -2em;
    
    @media only screen and (min-width: 960px) {
      padding: 3em 0 3em 1.5em;
      margin-right: -1.75em;
      margin-left: -1.75em;
    }
    
    @media only screen and (min-width: 1424px) {
      padding: 3em 0 3em 4em;
      margin-right: -4em;
      margin-left: -4.25em;
    }

    &.has-portfolio {
      background: var(--v-background-base);
      
      .col-md-7 {
        overflow: hidden;
      }
    }

    .v-slide-group__wrapper {
      margin: 0 calc(12px - 1.25em);

      @media screen and (min-width: 960px) {

      }
    }

    &.dark {
      background: radial-gradient(circle at 100% 0, #5F6A75, #151D24 25%);
      color: #fff;
      margin-left: -1.25em;
      margin-right: -1.25em;

      @media only screen and (min-width: 960px) {
        margin-left: -1.5em;
        margin-right: -1.5em;
      }

      @media only screen and (min-width: 1424px) {
        margin-left: -4em;
        margin-right: -4em;
      }

      h2 {
        color: var(--v-andeOrange-base);
      }

      p, span, a {
        color: #fff!important;
      }

      .with-dot:before {
        background-color: var(--v-andeTeal-base);
      }
    }

    .category-icon {
      width: 1.1em;
    }

    .subcategories {
      ul {
        padding-left: 0;
      
        li {
          margin-bottom: 2em;
          list-style: none;
        
          a {
            font-size: 1em;
            text-transform: uppercase;
            color: #151D24;

            @media only screen and (min-width: 960px) {
              font-size: 1.25em;
            }
          }
        }
      }
    }
  }
}

.v-dialog {
  background: var(--v-background-base);
}
</style>