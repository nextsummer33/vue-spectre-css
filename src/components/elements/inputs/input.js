import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { Color, Size, colorData, sizeData } from '@/mixins';
import Icon from '../icon';

export default {
  functional: true,
  inheritAttrs: false,
  mixins: [Color, Size],
  props: {
    tag: strType('input'),
    value: strType(''),
    iconLeft: strType(),
    iconRight: strType(),
    loading: boolType()
  },
  render(h, { props, data, listeners }) {
    const { tag, iconLeft, iconRight, loading, value } = props;
    const attrs = (data && data.attrs) || {};
    const icn = icon => h(Icon, { class: 'form-icon', props: { icon } });
    const lIcn = iconLeft && icn(iconLeft);
    const rIcn =
      (iconRight && icn(iconRight)) ||
      (loading && h('i', { staticClass: 'form-icon loading' }));
    if (data.model) {
      const cb = listeners.input;
      data.on.input = ev => {
        cb(ev.target.value);
      };
    }
    let el = h(
      tag,
      mergeData(data, colorData('is', props), sizeData('input', props), {
        staticClass: 'form-input',
        attrs: { type: tag === 'input' ? attrs.type || 'text' : undefined },
        domProps: { value }
      })
    );

    el =
      lIcn || rIcn
        ? h(
            'div',
            { staticClass: 'has-icon-' + (lIcn ? 'left' : 'right') },
            lIcn ? [lIcn, el] : [el, rIcn]
          )
        : el;

    return el;
  }
};
