// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as VueGoogleMap from "vue2-google-maps";
Vue.config.productionTip = false
Vue.use(VueGoogleMap, {
  load: {
    key: "AIzaSyB4SsIYTrkNVE4hJEfxS3HGsw-aJkel5Bo",
    libraries: 'places',
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
