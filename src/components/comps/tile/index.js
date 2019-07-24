import tile from './tile';
import tileIcon from './tile-icon';
import tileContent from './tile-content';
import tileText from './tile-text';
import tileAction from './tile-action';

export const STile = tile;
export const STileText = tileText;
export const STileIcon = tileIcon;
export const STileContent = tileContent;
export const STileAction = tileAction;

export default {
  install(Vue) {
    Vue.component('s-tile', STile);
    Vue.component('s-tile-text', STileText);
    Vue.component('s-tile-icon', STileIcon);
    Vue.component('s-tile-content', STileContent);
    Vue.component('s-tile-action', STileAction);
  }
};
