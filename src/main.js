import Vue from 'nativescript-vue'
import App from './components/frame'
import store from './store'
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'
import RadListView from 'nativescript-ui-listview/vue';
// import { isAndroid, isIOS } from "@nativescript/core/platform";

Vue.use(RadListView);
// Load TNSFonticon
TNSFontIcon.debug = true
TNSFontIcon.paths = {
  fa: './assets/css/fontawesome.min.css',
  far: './assets/css/regular.min.css',
  fas: './assets/css/solid.min.css',
  fab: './assets/css/brand.min.css'
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)

Vue.registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()

