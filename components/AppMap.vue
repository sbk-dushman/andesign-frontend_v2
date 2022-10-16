<template>
  <section class="map-section" id="map-section">
    <yandex-map
      v-if="showMap"
      :coords="coords"
      :style="style"
      :controls="['zoomControl', 'typeSelector']"
      zoom="17"
      :dragable="false"
      :scrollZoom="false"
      @map-was-initialized="onMapInit"
    >
      <ymap-marker
        marker-id="1"
        marker-type="placemark"
        :coords="[55.8688,37.5728]"
        :icon="markerIcon"
      ></ymap-marker>
    </yandex-map>
    <v-img
      v-if="!mapIsThere"
      src="/img/map.png"
      aspect="3.2"
      min-height="37em"
      class="map-img d-none d-md-flex"
    />
    <v-img
      v-if="!mapIsThere"
      src="/img/map_m.png"
      aspect="0.66"
      max-height="100vh"
      class="map-img d-flex d-md-none"
    />
    <v-container
      fluid
    >
      <v-row
        class="justify-center">
        <v-col
          cols="8"
          md="5"
          lg="4"
          xl="3"
          class="contacts"
        >
          <h2>Схема проезда</h2>
          <hr
            class="andeTeal"
          >
          <v-sheet
            color="andeDarkOrange contacts-info"
            rounded
            class="mt-7"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
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
                      <v-list-item-title><a href="tel:+74957979473" target="_blank" color="white"><b>+7 (495) 797 94 73</b></a></v-list-item-title>
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
                      <v-list-item-title><a href="mailto:info@andesign.ru" target="_blank">info@andesign.ru</a></v-list-item-title>
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
                      <v-list-item-title><a href="https://yandex.com/maps/-/CCUaRRCNpC" target="_blank">127410, г. Москва,<br />ул. Поморская,<br />д. 39, стр. 1</a></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col
                md="6"
                class="d-none d-md-flex"
              >
                <v-img
                  src="/img/qrcode1617815155.png"
                  max-width="80%"
                  aspect-ratio="1"
                  contain
                  class="mx-auto mt-3"
                />
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

export default {
  name: "AppMap",
  data() {
		return {
      coords: [55.8684000,37.573000],
      style: (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) ? "width: 100%; height: 100vh;" : "width: 100%; height: 37em;",
      showMap: false,
      mapIsThere: false, 
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'img/map_icon.svg',
        imageSize: [38, 46],
        imageOffset: [0, 0],
      }
	  }
  },
  computed: {
  },
  mounted() { 
    this.$nextTick(function () {
      this.showMap = true
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (process.client) {
        let width = window.innerWidth
        if (width < 960) {
          this.coords = [55.8678 + 0.0000005 * (width - 320), 37.5728 + 0.000001 * (width*3.6 - 1056)]
          this.style = "width: 100%; height: 100vh;"
        }
        if (width >= 960) {
          this.coords = [55.868888, 37.5728 + 0.000001 * (width*4.4 - 1056)]
          this.style = "width: 100%; height: 37em;"
        }
        if (width >= 1416) this.coords = [55.868888, 37.5728 + 0.000001 * (width*3.3 - 1056)]
      } else this.coords = [55.8684, 37.573]
    },
    onMapInit(myMap) {
      this.mapIsThere = true
      let myPolyline = new ymaps.Polyline([
          // Указываем координаты вершин ломаной.
          [55.870071, 37.584380],
          [55.869711, 37.584096],
          [55.870110, 37.583230],
          [55.869605, 37.572334],
          [55.869217, 37.572289],
          [55.868555, 37.572722]
      ], {
          // Описываем свойства геообъекта.
          // Содержимое балуна.
          balloonContent: "На авто"
      }, {
          // Задаем опции геообъекта.
          // Отключаем кнопку закрытия балуна.
          balloonCloseButton: false,
          // Цвет линии.
          strokeColor: "#5F6A75",
          // Ширина линии.
          strokeWidth: 4,
          // Коэффициент прозрачности.
          strokeOpacity: 1
      });

      // Добавляем линии на карту.
      myMap.geoObjects
        .add(myPolyline);
    }
  }
}
</script>

<style lang="scss" scoped>
.map-section {
  width: 100vw;
  position: relative;
  min-height: 37em;

  .map-img {
    margin-top: -100vh;
    @media only screen and (min-width: 960px) {
      margin-top: -37em;
    }
  }

  .container {
    
    position: absolute;
    bottom:0;
    pointer-events: none; 

    .contacts {
      z-index: 1;
      padding-top: 2em;
      padding-bottom:2em;
      pointer-events: auto;
  
        @media only screen and (min-width: 960px) {
          padding-bottom:4em;
        }

      h2 {
        font-size: 2.375em;
        max-width: 5em;
        font-weight: 300;
        text-transform: uppercase;
        margin:0;
  
        @media only screen and (min-width: 960px) {
          font-size: 3.4375em;
        }
      }

      hr {
        margin: 0 -12px 12px 0;
        width: 12em;
  
        @media only screen and (min-width: 960px) {
          width: 18em;
        }
      }

      .contacts-info {
        max-width: 18em;
  
        @media only screen and (min-width: 960px) {
          max-width: none;
        }
      }

      .v-list {
  
        @media only screen and (min-width: 960px) {
          padding-bottom: 2em;
        }

        a, p, span {
          font-size: 1rem;
          color: #fff;
        }
      }
    }
  } 
}
</style>
