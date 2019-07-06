import { mergeData } from 'vue-functional-data-merge';
import { stringType } from '@/utils/proptypes';
import itm from './navbar-item';
import Vue from '@/utils/vue';

export default Vue.extend({
  name: 'SNavbar',
  functional: true,
  props: {
    tag: stringType('header')
  },
  render(h, { props, data, children, slots }) {
    const s = slots();
    children = s.default || [
      s.left && h(itm, { slot: 'left' }, s.left),
      s.center && h(itm, { slot: 'center', props: { center: true } }, s.center),
      s.right && h(itm, { slot: 'right' }, s.right)
    ];
    return h(props.tag, mergeData(data, { staticClass: 'navbar' }), children);
  }
});
