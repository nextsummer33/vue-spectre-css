import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import itm from './navbar-item';

export default {
  name: 'SNvb',
  functional: true,
  props: {
    tag: strType('header')
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
};
