import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("https://admin.andesign.ru/wp-json/wp/v2/categories?page=1&per_page=100&hide_empty=true&parent=0")
    .then(res => {
      return res.data.map(category => `/${category.slug}`)
    })
  return routes
}

export default {
  target: "static",
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favico.png" }
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#e8af64" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss",
    "~/assets/fonts/fonts.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/categories.server.js",
    "~/plugins/pages.server.js",
    "~/plugins/pCases.server.js",
    "~/plugins/dateformat.js",
    "~/plugins/ymapPlugin.js",
  ],
  router: {
    base: '/'
  },
  generate: {
    routes: dynamicRoutes,
    fallback: '404.html',
    devtools: true
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) { }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      light: true,
      themes: {
        dark: {
          background: '#00a86b'
        },
        light: {
          background: '#F6FBFB',
          andeOrange: '#E8AF64',
          andeDarkOrange: '#D97535',
          andeGray: '#5F6A75',
          andeLightGray: '#DCE3EB',
          andeTeal: '#00AAB4',
        }
      },
    },
    breakpoint: {
      thresholds: {
        xs: 600,
        sm: 960,
        md: 1440,
        lg: 1920,
      },
    },
  },
}