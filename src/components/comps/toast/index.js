import Toast from './toast';

export const SToast = Toast;

export default {
  install(Vue) {
    Vue.component('s-toast', SToast);
  }
};
