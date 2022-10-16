import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: '2f268a65-fadd-406b-be71-043337a63f73',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
}

Vue.use(YmapPlugin, settings)