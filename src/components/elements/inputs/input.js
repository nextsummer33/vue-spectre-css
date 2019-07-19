import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import mixins, { colorData, sizeData } from '@/components/mixins';
import Icon from '../icon';

export default {
  functional: true,
  inheritAttrs: false,
  mixins,
  props: {
    tag: strType('input'),
    value: strType(''),
    iconLeft: strType(),
    iconRight: strType(),
    loading: boolType()
  },
  render(h, { props, data, children, listeners }) {
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
    let vm = h(
      tag,
      mergeData(data, colorData('is', props), sizeData('input', props), {
        staticClass: 'form-input',
        attrs: { type: tag === 'input' ? attrs.type || 'text' : undefined },
        domProps: { value }
      }),
      children
    );

    vm =
      lIcn || rIcn
        ? h(
            'div',
            { staticClass: 'has-icon-' + (lIcn ? 'left' : 'right') },
            lIcn ? [lIcn, vm] : [vm, rIcn]
          )
        : vm;

    return vm;
  }
};
