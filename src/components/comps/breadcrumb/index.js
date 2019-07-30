import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';

export const SBreadcrumb = Breadcrumb;
export const SBreadcrumbItem = BreadcrumbItem;

export default {
  install(Vue) {
    Vue.component('s-breadcrumb-item', BreadcrumbItem);
    Vue.component('s-breadcrumb', Breadcrumb);
  }
};
