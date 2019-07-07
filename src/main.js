import Vue from '@/utils/vue';
import App from './App.vue';
import router from './router';
import 'spectre.css';
import layouts from './components/layouts';
import comps from './components/comps';
import elems from './components/elements';

Vue.config.productionTip = false;
Vue.use(layouts);
Vue.use(comps);
Vue.use(elems);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
