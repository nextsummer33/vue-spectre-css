import Empty from './empty';
import EmptyIcon from './empty-icon';
import EmptyText from './empty-text';
import EmptyAction from './empty-action';

export default {
  install(vue) {
    vue.component('s-empty', Empty);
    vue.component('s-empty-icon', EmptyIcon);
    vue.component('s-empty-text', EmptyText);
    vue.component('s-empty-action', EmptyAction);
  }
};
