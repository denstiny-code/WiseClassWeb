// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import VueRouter from 'vue-router';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import _global from './components/tools/Global'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.prototype.GLOBAL = _global;
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// The routing configuration
;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {App},
  template: '<App/>'
})

