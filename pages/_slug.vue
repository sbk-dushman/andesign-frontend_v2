<template>
  <div class="category individual">
    <section class="head">
      <v-container
          fluid
        >
        <v-row>
          <v-col
            cols="12"
            :lg="page.acf.top_right? 6 : 12"
          >
            <v-row>
              <v-col
                md="1"
                offset-md="1"
                :offset-lg="page.acf.top_right? 2 : 1"
              >
                <div
                  class="category-header"
                >
                  <h1
                    class="mb-0"
                  >
                    {{ category.name }}
                  </h1>
                  <hr
                    width="100%" 
                    class="andeTeal my-2"
                  />
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-if="categoryChildren.length || page.acf.file"
                cols="12"
                sm="6"
                md="4"
                offset-md="1"
                :lg="page.acf.top_right ? 4 : 3"
                :offset-lg="page.acf.top_right ? 2 : 1"
              >
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <p
                      class=""
                    >
                      Выберите одну или несколько категорий
                    </p>
                  </v-col>
                </v-row>
                <div
                  v-if="switches"
                  class="category-switches"
                >
                  <v-switch
                    color="andeTeal"
                    v-for="(child, index) in categoryChildren"
                    :key="child.id"
                    v-model="switches[index]"
                    :label="child.name"
                    :value="child.id"
                  ></v-switch>
                </div>
                <a
                  v-if="page.acf.file"
                  :href="page.acf.file"
                  target="_blank"
                >
                  <v-btn
                    large
                    rounded
                    outlined
                    depressed
                    height="3em"
                    class="white--text view-button download-button my-12"
                  >
                    <span>
                      Презентация
                    </span>
                  </v-btn>
                </a>
              </v-col>
              <v-col
                :md="(categoryChildren.length ? 3 : 6) * (page.acf.top_right? 2 : 1)"
                :lg="(categoryChildren.length ? 2 : 4) * (page.acf.top_right? 2 : 1)"
                offset-md="1"
                :offset-lg="!categoryChildren.length ? 2 : ''"
                v-html="page.acf.prologue || category.description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
                class="mb-0"
              >
              </v-col>
            </v-row>
            <v-row>
              <v-col
                :offset="page.acf.top_right? 4: 2"
              >
                <v-btn
                  v-if="page.acf.order_button[0]"
                  large
                  rounded
                  outlined
                  depressed
                  @click="newMessage(category.name, switches)"
                  class="white--text view-button order-button"
                >
                  <span>
                    Заказать
                  </span>
                </v-btn>
                <div class="mt-12 flex-row d-none d-lg-flex">
                  <hr
                    width="7px"
                    class="andeLightGray mr-1 ml-n3"
                  >
                  <hr
                    width="45px"
                    class="andeLightGray"
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            v-if="page.acf.top_right"
            v-html="page.acf.top_right"
            class="top-right d-none d-md-block"
          />
        </v-row>
      </v-container>
    </section>
    <section
      v-if="page.content.rendered"
      class="page-content d-none d-md-block"
      >
      <v-container
        fluid
      >
        <v-row>
          <v-col
            v-html="page.content.rendered"
          />
        </v-row>
      </v-container>
    </section>
    <section
      v-if="page.acf.services.length"
      class="services"
    >
       <v-container
        fluid
      >
        <v-row>
          <v-col
            v-for="(service, index) in page.acf.services"
            :key="service.title"
            cols="12"
            sm="6"
            class="service mt-8 mb-8 mb-lg-16 d-flex flex-column"
          >
            <v-row>
              <v-col
                :offset-md="((index+1)%2)*2"
              >
                <hr
                  v-if="index <= 1"
                  width="45px"
                  class="andeTeal my-2"
                >
                <h2
                  v-html="service.title"
                  class="mb-4"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                :offset-md="((index+1)%2)*2 + 2"
                v-html="service.description"
                />
            </v-row>
            <v-row
              class="price">
              <v-col
                :offset-md="((index+1)%2)*2 + 2"
              >
              от
              <p v-html="service.price" />
              рублей
              </v-col>
            </v-row>
            <v-spacer />
            <v-row
              class="align-end">
              <v-col
                md="2"
                :offset-md="((index+1)%2)*2 + 2"
              >
                <div class="mb-4 mb-lg-6 d-flex flex-row justify-end justify-md-start">
                  <hr
                    width="7px"
                    class="andeLightGray mr-1 ml-n3"
                  >
                  <hr
                    width="45px"
                    class="andeLightGray"
                  >
                </div>
              </v-col>
              <v-col>
                <v-btn
                  large
                  rounded
                  outlined
                  depressed
                  @click="newMessage(service.title)"
                  class="white--text view-button order-button"
                ><span>Заказать</span></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section
      v-if="pCases.length"
      class="cases">
      <v-container
        fluid
      >
        <v-row
          v-for="pCase in filteredPCases"
          :key="pCase.slug"
          class="case"
          :id="pCase.slug"
        >
          <v-col
            cols="12"
            md="3"
            offset-lg="1"
            class="d-flex flex-column"
          >
            <div 
              class="d-flex flex-column"
              :style="'min-height: ' + (($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? '0' : $vuetify.breakpoint.md ? '24.5625em' : '32em')"
            >
              <div class="subcategories d-flex align-center my-2">
                <hr
                  width="45px"
                  class="andeTeal"
                >
                <span class="ml-2">
                  {{ getCategoryChildrenByIDs(pCase.categories) }}
                </span>
              </div>
              <h2>{{ pCase.title.rendered }}</h2>
              <v-spacer />
              <p
                class="mb-0"
                v-html="pCase.acf.description"
              />
              <div class="mt-12 d-flex flex-row justify-center">
                <hr
                  width="7px"
                  class="andeLightGray mr-1 ml-16"
                >
                <hr
                  width="45px"
                  class="andeLightGray"
                >
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="9"
            lg="8"
            class="slider pa-0"
          >
            <p-case-slider
              v-if="pCase.acf.media.length" :images="pCase.acf.media"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      option: this.$route.params.option || null,
      switches: []
    }
  },
  computed: {
    category() {
      return this.$store.state.categories.find( cat => cat.slug === this.$route.params.slug )
    },
    categoryChildren() {
      return this.$store.state.categories.filter( cat => cat.parent === this.category.id )
    },
    page() {
      return this.$store.state.pages.find( page => page.categories.includes(this.category.id) )
    },
    pCases() {
      return this.$store.state.pCases.filter( pCase => pCase.categories.includes(this.category.id) )
    },
    filteredPCases() {
      if (this.switches.find(el => el != null)) {
        return this.pCases.filter( pCase => this.switches.filter( value => pCase.categories.includes(value) ).length )
      }
      return this.pCases
    },
  },
  methods: {
    populateChildrenModels() {
      if (this.categoryChildren.length) {
        this.categoryChildren.forEach((child) => {
          this.switches.push( this.option === child.id ? child.id : null)
        })
      }
    },
    getCategoryChildrenByIDs(ids) {
      if (this.categoryChildren.length) {
        let cats = []
        this.categoryChildren.filter(cat => ids.includes(cat.id)).forEach(el => cats.push(el.name))
        return cats.join(', ') 
      }
      return null
    },
    newMessage(message, options) {
      console.log('new message: ', message)
      
      if (options && options.find(el => el != null)) {
        const interestingCategories = this.categoryChildren.filter(({id}) => options.includes(id)),
        n = interestingCategories.length
        if (n) {
          message += ': '
          interestingCategories.forEach((cat, index) => message += cat.name + ((index + 1 != n) ? ', ' : ''))
        }
      }
      this.$nuxt.$emit('set-message', message)
      return this.$nuxt.$emit('open-dialog', 'order-form', {message: message})
    },
    downloadFile(url) {
      axios({
          url: url,
          method: 'GET',
          responseType: 'blob',
      }).then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'Презентация — ЭндиЗайн — '+ category.name +'.pdf');
            document.body.appendChild(fileLink);

            fileLink.click();
      });
    }
  },
  created() {
    this.$store.dispatch("getPCases")
    this.populateChildrenModels()
  },
  validate({ params, store }) {
    return store.state.categories.some(category => category.slug === params.slug)
  }
};
</script>

<style lang="scss" scoped>
.page-enter-active,
.layout-enter-active {
  overflow: hidden;
  animation: acrossIn .40s ease-out both;
} 
.page-leave-active, 
.layout-leave-active {
  overflow: hidden;
  animation: acrossOut .60s ease-in both;
} 
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
    width: 20vw;
  }
  100% {
    transform: translate3d(0, 0, 0);
    width: 100vw;
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
    width: 100vw;
  }
  100% {
    transform: translate3d(-100%, 0, 0);
    width: 20vw;
  }
    }
</style>

<style lang="scss">
@import "@/assets/mixins.scss";

div.category.individual {
  position: relative;
  padding-top: 6em;
    
  @media only screen and (min-width: 960px) {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: url('/img/index_left.png') no-repeat, url('/img/index_right.png') no-repeat;
      background-position: -20% calc(100% + 126px), 123% -20em;
      transform: rotate(180deg);
      z-index: 0;
    }
  }

  @media only screen and (min-width: 1424px) {
    &::before {
      background-position: -10% calc(100% + 126px), 110% -20em;
    }
  }
  
  
  .container {
    padding: 2.5em 1.25em;
    position: relative;

    @media only screen and (min-width: 960px) {
      padding: 2.5em 1.5em;
    }

    @media only screen and (min-width: 1424px) {
      padding: 2.5em 4em;
    }
  }

  section:last-child .container  {
    padding-bottom: 5em;
  }

  h2,h3 {
    font-size: 3.4375em;
    @include fluid-type(font-size, 1280px, 1920px, 20px, 55px);
    font-weight: 300;
    text-transform: uppercase;
    padding-right: 3em;
    margin: 0;
  }

  h3, h4 {
    font-size: 1.25em;
  }

  .head {
    .container {
      padding: 8.75em 1.25em 2.5em;

    @media only screen and (min-width: 960px) {
      padding: 8.75em 1.5em 2.5em;
    }

    @media only screen and (min-width: 1424px) {
      padding: 8.75em 4em 2.5em;
    }

      .category-header {
        width: -moz-fit-content;
        width: fit-content;

        h1 {
          font-size: 7.375em;
          @include fluid-type(font-size, 320px, 1920px, 30px, 118px);
          font-weight: 300;
          text-transform: uppercase;
        }
      }

      .category-switches {
        .v-input{
          
          @media only screen and (min-width: 1424px) {
            padding-left: calc(50% - 6em);
          }

          .v-label {
            font-size: 1em;
            line-height: 1.5;
            text-transform: uppercase;
            color: #151D24;
            position: relative;
            z-index: 0;
            max-width: fit-content;

            @media only screen and (min-width: 960px) {
              font-size: 1.25em;
            }

            &::before {
              content: "";
              width: 7px;
              height: 7px;
              border-radius: 9999px;
              background-color: var(--v-andeOrange-base);
              display: block;
              position: absolute;
              bottom: 0.3em;
              left: -0.3em;
              z-index: -1;
              transition: width .3s ease;
            }
          }

          &.v-input--is-label-active .v-label::before {
              width: calc(100% + .6em);
          }

          .v-input--selection-controls__input {
            width:4.125em;
            margin-right: .75em;

            .v-input--switch__track {
              height: 1.6875em;
              width:4.125em;
              border-radius: 99px;
              opacity: .4;
              border: solid white 2px;
              top: 0;
            }

            .v-input--switch__thumb {
              top: 0;
              height: 1.6875em;
              width: 1.6875em;
              color: var(--v-andeDarkOrange-base);
              background-image: url(/img/x.svg);
              background-position: center center;
              background-repeat: no-repeat;
            }
          
            .v-input--selection-controls__ripple {
              top: calc(50% - 22px);
              left: -11px;
              color: var(--v-andeDarkOrange-base);
            }
          }

          &.v-input--is-label-active .v-input--switch__thumb {
            background-image: url(/img/ok.svg);
          }

          &.v-input--is-dirty .v-input--selection-controls__ripple, &.v-input--switch.v-input--is-dirty .v-input--switch__thumb {
              transform: translate(2.5625em, 0);
          }

          &.theme--light.v-input--switch .v-input--switch__track {
            color: var(--v-andeOrange-base);
          }
        }
      }
    }
  }

  section.services {
      
    h2 {
      font-weight: 300;
      text-transform: uppercase;
      margin-bottom: 1em;
      @include fluid-type(font-size, 1280px, 1920px, 20px, 55px);
    }
    
    ul {
      list-style: none;
      
      @media only screen and (min-width: 960px) {
        padding-left: 0;
      }
    
      li {

        line-height: 2;

        &::before {
          content: "\2022"; 
          color: var(--v-andeOrange-base);
          font-weight: bold;
          font-size: 2em;
          line-height: 1;
          display: inline-block;
          width: 1em;
          text-align: center;
          margin-left: -1em;
          vertical-align: top;
        }
      }
    }

    .price {
      color: var(--v-andeGray-base);
      font-size: 1.25em;

      p {
        color: var(--v-andeTeal-base);
        @include fluid-type(font-size, 1280px, 1920px, 30px, 62px);
        font-weight: bold;
        margin: 0 0 -.125em 0;
        line-height: 1;
      }
    }
  }

  section.cases {
      
    .case {
      margin-right: -1.25em;        
      padding: 0 0 1em 0;

      @media only screen and (min-width: 960px) {
        margin-right: -1.5em;      
        padding: 0 0 5em 0;
      }

      @media only screen and (min-width: 1424px) {
        margin-right: -4em; 
      }

      &:last-child {
        padding-bottom: 0;
      }
      
      .subcategories {
        span {
          font-size: 12px;
          text-transform: uppercase;
        }
      }
      
      h2 {
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 1em;
        @include fluid-type(font-size, 1280px, 1920px, 20px, 55px);
      }
    }

    .slider {
        padding-right: 0;
    }
  }

  .v-btn {

    width: 11.25em;
    height: 3.25em;
    
    @media only screen and (min-width: 1424px) {
      width: 10.388889em;
      height: 3em;
    }

    background: var(--v-andeDarkOrange-base);

    &.order-button:before {
      background: url("/img/mail_back1.svg") center bottom no-repeat;
      background-size: cover;
    }

    &.order-button:after {
      content: url("/img/mail.svg");
      background: url("/img/mail_back2.svg") center bottom no-repeat;
      background-size: cover;
    }

    &.download-button {
      background: var(--v-andeTeal-base);
      width: 12.875em;
      max-width: 100%; 

      @media only screen and (min-width: 1424px) {
        width: 15.5em;
        max-width: 100%; 
      }

      &:after {
        content: url("/img/download.svg");
        padding-top: 0.825em;
      }

    }
  }
}

</style>