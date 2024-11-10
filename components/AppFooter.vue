<template>
  <footer class="footer" id="footer">
    <v-container
      fluid
    >
      <v-row>
        <v-col
          cols="12"
          md="3"
          offset-lg="1"
          class="footer-left-coll"
        >
          <nuxt-link
            exact
            to="/"
          >
            <app-icon :brand="brand" fill1="#fff" fill2="#fff" height="50" width="115"></app-icon>
          </nuxt-link>
         
          <v-list>
            <v-list-item
          
            >
              <ul
             class="footer__company-list  company-list"
              >
                <li class="company-list__item">
                ВСК-групп
              </li>
              <li class="company-list__item">АСТ-групп</li>
              <li class="company-list__item">ЭндиЗайн мебель</li>
              <li class="company-list__item">ЛигаСтрой</li>
              <li class="company-list__item">ЭндиЗайн строй</li>
              <li class="company-list__item">РегионСтрой</li>
              </ul>
            </v-list-item>
          </v-list>
          <h5 class="partners__title ">И наши партнеры</h5>
          
          <v-list>
            <v-list-item>
              <ul class="partners-list">
                <li class="partners-list__item">ММ Строй</li>
                <li class="partners-list__item">Arch Professional</li>
                <li class="partners-list__item">Zlt</li>
                <li class="partners-list__item">Altercasa</li>
              </ul>

            </v-list-item>
          </v-list>
          <p
            class="copyright white--text d-none d-md-block"
          >
            © ООО "ЭндиЗайн", 2003 - 2023
          </p>
        </v-col>
        <v-col
          cols="12"
          md="4"
          lg="3"
          class="d-block"
        >
          <v-list>
            <v-list-item
              v-for="category in parentCategories"
              :key="category.slug"
            >
              <nuxt-link
                :to="{ name: 'slug', params: { slug: category.slug }}"
                class="with-dot ease-width mb-4"
              >
                {{ category.name }}
              </nuxt-link>
              <ul
                v-if="getCategoryChildren(category.id).length && category.acf.show_children"
              >
                <li
                  v-for="child in getCategoryChildren(category.id)"
                  :key="child.slug"
                >
                  <nuxt-link
                  class="footer-link"
                    :to="{ name: 'slug', params: { slug: category.slug, option: child.id } }" 
                  >
                    {{ child.name }}
                  </nuxt-link>
                </li>
              </ul>
            </v-list-item>
          </v-list>
          <p
            class="white--text font-weight-bold mb-2"
          >
            ПОИСК
          </p>
          <app-search />
       
          <p
            class="copyright white--text d-block d-md-none mt-8"
          >
            © ООО "ЭндиЗайн", 2003 - 2024
          </p>
        </v-col>
        <v-col
          cols="12"
          md="4"
          offset-md="1"
          lg="2"
          class="d-none d-md-flex"
        >
          <order-form :dark="true" />
        </v-col>
        <v-col
          cols="12"
          lg="1"
          offset-lg="1"
          class="social d-none d-lg-flex"
        >
     
          <!-- <a 
            href="https://ru-ru.facebook.com/profile.php?id=100004352977996"
            target="_blank"
          > -->
          <a 
            href="https://t.me/+a8P9JSM74AUyZjNi"
            target="_blank"
          > 
            <v-btn
              fab
              width="42px"
              height="42px"
              elevated="false"
              class="social-fb-button"
            >
            <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.12 435.8">
              <title id="ig-alt">Мы в Telegram</title>
              <path id="ig-Path" d="m123.81,414.71C-7.16,357.14-57.32,157.71,88.84,42.53,122.92,15.68,181.06-3.7,229.1.6c.22.02,4.8.21,6.94.24,9.6.14,42.36,6.22,61.07,14.22,113.45,48.54,154.75,155.9,133.75,250.46-27.26,122.73-161.71,213.07-307.04,149.19Zm285.45-197.1h0c0-122.21-117.31-224.83-256.47-179.29C63.8,67.45,15.73,169.86,27.84,238.81c11.15,63.52,21.19,72.8,51.19,110.65,16.95,21.39,70.7,55.03,112.05,58.2,48.58,3.72,54.93-.93,59.09-.89,2.98.03,37.2-8.94,42.02-12.41.25-.18.57-.32.88-.35,15.16-1.19,116.2-58.67,116.2-176.4Z"/>
              <path d="m321.25,128.64c-.29,4.84-35.08,186.4-37.5,191.61-5.44,11.72-20.24,16.37-29.85,12.95-9.62-3.42-44.63-33.42-49.09-35.55-2.63-1.26-20.58,19.79-30.71,25.37-8,4.4-19.31.16-23.53-11.38-4.96-13.56-18.21-59.47-18.64-59.61-.1-.03-41.97-14.52-43.18-14.77-16.93-3.42-27.33-25.16-8.67-37.56,6.59-4.38,114.62-48.24,173.66-73.71,28.21-12.17,46.51-20.22,51.24-17.65,3.13,1.7,14.79,1.66,16.27,20.3Zm-59.27,182.05c.48-1.52,35.07-175.62,34.39-177.06-.1.04-195.31,82.25-195.39,82.45.51.78,47.23,16.5,47.13,16.46,1.18.6,103.09-63.22,107.41-65.81,5.67-3.4,10.18-6.9,14.4-5.8,2.62.68,4.18,5.28,1.09,8.31-95.53,93.67-92.46,79.04-93.86,95.33,0,.1-4.73,26.46-4.14,28.4,2-.75,11.38-10.1,26.32-23.5,5.27-4.73,6.05-.32,12.42,3.55,4.33,2.63,47.02,37.38,50.22,37.67Z"/>
            </svg>  
              <!-- <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="11.4" height="19.5" viewBox="0 0 11.4 19.5" aria-label="fb-alt">
                <title id="fb-alt">Мы в Facebook</title>
                <g id="Facebook-2" data-name="Facebook" transform="translate(-0.25 -0.25)">
                    <path id="fb-Shape" d="M7.05,19.5H3.45a.751.751,0,0,1-.75-.751V12.3H.75A.751.751,0,0,1,0,11.55V7.95A.751.751,0,0,1,.75,7.2H2.7V5.25A5.251,5.251,0,0,1,7.95,0h2.7A.751.751,0,0,1,11.4.75v3.6a.751.751,0,0,1-.751.751H7.95A.148.148,0,0,0,7.8,5.25V7.2H10.65a.75.75,0,0,1,.728.931l-.9,3.6a.75.75,0,0,1-.728.569H7.8V18.75A.751.751,0,0,1,7.05,19.5ZM1.5,8.7v2.1H3.45a.751.751,0,0,1,.751.75V18H6.3V11.55a.751.751,0,0,1,.75-.75H9.165l.525-2.1H7.05A.751.751,0,0,1,6.3,7.95V5.25A1.65,1.65,0,0,1,7.95,3.6H9.9V1.5H7.95A3.749,3.749,0,0,0,4.2,5.25v2.7A.751.751,0,0,1,3.45,8.7Z" transform="translate(0.25 0.25)" fill="#5f6a75"/>
                </g>
              </svg> -->
            </v-btn>
          </a>
          <!-- <a
            href="https://www.instagram.com/ande_sign_2004/"
            target="_blank"
          >
            <v-btn
              fab
              width="45px"
              height="45px"
              class="social-ig-button"
              elevated="false"
              :disabled='sending'
            >
              <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="18.884" height="18.915" viewBox="0 0 18.884 18.915" aria-labeled="id-alt">
                <title id="ig-alt">Мы в Instagram</title>
                <g id="Instagram-2" data-name="Instagram" transform="translate(-0.558 -0.542)">
                  <path id="ig-Path" d="M0,1A1,1,0,1,1,1,2,1,1,0,0,1,0,1Z" transform="translate(14 4)" fill="#5f6a75"/>
                  <path id="ig-Shape" d="M4.75,9.5A4.75,4.75,0,1,1,9.5,4.75,4.756,4.756,0,0,1,4.75,9.5Zm0-8A3.25,3.25,0,1,0,8,4.75,3.254,3.254,0,0,0,4.75,1.5Z" transform="translate(5.25 5.25)" fill="#5f6a75"/>
                  <path id="ig-Shape-2" data-name="Shape" d="M9.442,18.915a47.567,47.567,0,0,1-5.258-.29,4.426,4.426,0,0,1-2.6-1.242,4.364,4.364,0,0,1-1.271-2.59,46.04,46.04,0,0,1,0-10.669,4.364,4.364,0,0,1,1.271-2.59A4.426,4.426,0,0,1,4.184.291,47.664,47.664,0,0,1,14.7.291a4.425,4.425,0,0,1,2.6,1.242,4.364,4.364,0,0,1,1.271,2.59,45.941,45.941,0,0,1,0,10.669,4.364,4.364,0,0,1-1.271,2.59,4.425,4.425,0,0,1-2.6,1.242A47.585,47.585,0,0,1,9.442,18.915Zm0-17.415a46,46,0,0,0-5.092.281A2.9,2.9,0,0,0,1.8,4.3a44.426,44.426,0,0,0,0,10.32,2.9,2.9,0,0,0,2.55,2.516,46.108,46.108,0,0,0,5.092.281,46.108,46.108,0,0,0,5.092-.281,2.9,2.9,0,0,0,2.55-2.516,44.525,44.525,0,0,0,0-10.32,2.9,2.9,0,0,0-2.55-2.516A46,46,0,0,0,9.442,1.5Z" transform="translate(0.558 0.542)" fill="#5f6a75"/>
                </g>
              </svg>
            </v-btn>
          </a> -->
          <hr
            class="andeOrange my-4" 
            width="42px"
          />
          <p
            class="white--text"
          >
            Присоединяйтесь<br/>к&nbsp;нам
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>

export default {
  name: "AppFooter",
  props: {
    categories: {
      type: Array,
      default: () => [
      ]
    }
  },
  data() {
    return {
      brand: 'ЭндиЗайн'
    };
  },
  computed: {
    parentCategories() {
      return this.categories.filter( cat => cat.parent == 0 )
    }
  },
  methods: {
    getCategoryChildren (id) {
      return this.categories.filter( cat => cat.parent == id )
    }
  },
  created() {
  }
};
</script>

<style lang="scss">
footer {
  position: relative;
  background: radial-gradient(circle at 100% 0, #5F6A75, #151D24 25%);
  overflow: hidden;
  

    
  .container {
    padding: 2.5em 1.25em;
    @media only screen and (min-width: 960px) {
      & {
        padding: 2.5em 4em;
      }
    }
    .col-12 {
      display: flex;
      flex-direction: column;

      a, label, span {
        color: #fff;
        text-transform: uppercase;
        font-size: .875em;
        font-weight: 600;
      }


      .v-list {
        background: transparent;
        flex-direction: column;
        display: flex;
        flex-wrap: wrap;
        max-height: 30em;

        .v-list-item {

          flex-direction: column;
          align-items: flex-start;
          min-height: 1.5em;
          padding-left: 0;

          .with-dot:before {
            bottom: 0;
            left: -.5em;
          }

          .with-dot.ease-width:hover:before, .nuxt-link-active:before, .with-dot.dot-active.ease-width:before {
            width: calc(100% + 1em);
          }

          ul {
            list-style: none;
            padding-left: 0;

            a  {
              font-weight: 300;
              text-transform: capitalize;
              line-height: 1.4;
            }
            .footer-link{
        transition: .2s color .2s ease-out;
        &:hover{
          color: #ff8200;
       }
      } 
          }
        }
      }
      .social-fb-button svg{
    width: 26px;
    fill: rgb(95, 106, 117);
  }

      .company-list,.partners-list__item{
              font-weight: 300;
              text-transform: capitalize;
              line-height: 1.4;
              font-size: 0.875em;
      }
      .company-list{
        // color: #d97535;
        color:#ff8200
      }
      .partners-list__item{
        color: #fff;
        line-height: 2;
      }
      .partners__title{
        color: #fff;
        text-transform: uppercase;
    font-size: 0.875em;
        font-weight: 600;
      }
  
      .search-form {
        width: 100%;
      }

      label {
        display: block;
      }

      .v-input__slot {
        border-radius: 7px;
        min-height: 1.75em;
      }

      .theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {
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

      .theme--dark.v-btn.v-btn--disabled {
        color: rgba(255, 255, 255, 0.5) !important;

        span {
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }
    }
    .footer-left-coll{
        justify-content: space-between;
      }
    .social {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      * {
        z-index: 0;
      }

      .v-btn {
        margin: 1em 0;
        overflow: hidden;
    
        &::before, &::after {
          content: "";
          margin:auto;
          display: block;
          position: absolute;
          opacity: 1;
          width:100%;
          height:200%;
          top: -300%;
          background: url("/img/fb_back1.svg") center top no-repeat;
          transition: .2s all .2s ease-out;
          background-size: cover;
          border-radius: 0;
          box-shadow: none;
        }

        &::after {
          background: url("/img/fb_back2.svg") center top no-repeat;
          background-size: cover;
          transition: .4s all .2s ease-in;
          top: -200%;
        }

        &.social-ig-button::before {
          background: url("/img/ig_back1.svg") center top no-repeat;
          background-size: cover;
        }

        &.social-ig-button::after {
          background: url("/img/ig_back2.svg") center top no-repeat;
          background-size: cover;
        }

        &:hover::before {
          top: 95%;
        }
        
        &:hover::after {
          top: -5%; 
        }

        & svg * {
          transition: fill .3s ease;
        }

        &:hover svg * {
          fill: white;
        }
      }

      p {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
        font-size: 0.875em;
        text-transform: uppercase;
      }
    }

  }
}
</style>
