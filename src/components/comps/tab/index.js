import Tab from './tab';
import TabItem from './tab-item';
import TabLink from './tab-link';

export const STab = Tab;
export const STabItem = TabItem;
export const STabLink = TabLink;

export default {
  install(Vue) {
    Vue.component('s-tab', Tab);
    Vue.component('s-tab-item', TabItem);
    Vue.component('s-tab-link', TabLink);
  }
};
