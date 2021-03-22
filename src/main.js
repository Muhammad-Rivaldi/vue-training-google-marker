import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGeoLocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGeoLocation)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDLB0zIjOUIhEQ0b6K869jpadgQSeC3_TE',
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')