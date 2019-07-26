import Tab from './tab';
import TabItem from './tab-item';

export const STab = Tab;
export const STabItem = TabItem;

export default {
  install(Vue) {
    Vue.component('s-tab', Tab);
    Vue.component('s-tab-item', TabItem);
  }
};
