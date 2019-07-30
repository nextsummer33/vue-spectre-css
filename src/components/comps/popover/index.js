import Popover from './popover';
import Container from './popover-container';

export const SPopover = Popover;
export const SPopoverContainer = Container;

export default {
  install(Vue) {
    Vue.component('s-popover', Popover);
    Vue.component('s-popover-container', Container);
  }
};
