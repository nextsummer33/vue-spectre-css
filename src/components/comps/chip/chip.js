import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { SBtn } from '@/components/elements';
import { SAvatar } from '@/components/comps/avatar';

const imgEl = (h, attrs) => {
  const props = {
    sm: true,
    tag: attrs.initial ? 'figure' : 'img'
  };
  return h(SAvatar, { props, attrs });
};

const btnEl = (h, data) => {
  const vdata = {
    props: { tag: 'a', clear: true },
    attrs: { href: '#', 'aria-label': 'Close', role: 'button' }
  };
  return h(SBtn, mergeData(data, vdata));
};

export default {
  functional: true,
  props: {
    tag: strType('span'),
    clear: boolType()
  },
  render(h, { props, data, slots }) {
    const attrs = data.attrs || {};
    const ch = [
      attrs.src || attrs.initial ? imgEl(h, attrs) : undefined,
      slots().default || 'label',
      props.clear ? btnEl(h, data) : undefined
    ];
    return h(props.tag, { staticClass: 'chip' }, ch);
  }
};
