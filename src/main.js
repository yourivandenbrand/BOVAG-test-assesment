import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes';
import 'primeflex/primeflex.css';

import '../node_modules/primeicons/primeicons.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudSunRain, faPhone, faTooth, faInfo, faMapMarkerAlt, faLightbulb, faHockeyPuck, faBell, faCog, faFeather, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCloudSunRain, faPhone, faTooth, faInfo, faMapMarkerAlt, faLightbulb, faHockeyPuck, faBell, faCog, faFeather, faExclamationCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes,
  mode: 'history'
})

document.title = "viaBOVAG.nl"

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
