import Dropdown from './dropdown';
import Toggle from './dropdown-toggle';

export const SDropdown = Dropdown;
export const SDropdownToggle = Toggle;

export default {
  install(vue) {
    vue.component('s-dropdown', Dropdown);
    vue.component('s-dropdown-toggle', Toggle);
  }
};
