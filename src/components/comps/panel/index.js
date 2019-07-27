import Panel from './panel';
import PanelHeader from './panel-header';
import PanelNav from './panel-nav';
import PanelBody from './panel-body';
import PanelFooter from './panel-footer';
import PanelTitle from './panel-title';

export const SPanelHeader = PanelHeader;
export const SPanelNav = PanelNav;
export const SPanelBody = PanelBody;
export const SPanelFooter = PanelFooter;
export const SPanelTitle = PanelTitle;
export const SPanel = Panel;

export default {
  install(Vue) {
    Vue.component('s-panel-header', PanelHeader);
    Vue.component('s-panel-nav', PanelNav);
    Vue.component('s-panel-body', PanelBody);
    Vue.component('s-panel-footer', PanelFooter);
    Vue.component('s-panel-title', PanelTitle);
    Vue.component('s-panel', Panel);
  }
};
