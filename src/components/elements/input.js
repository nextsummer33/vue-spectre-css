import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import mixins, { colorData, sizeData } from '../mixins/input';
import Icon from './icon';

export default {
  functional: true,
  mixins,
  props: {
    tag: strType('input'),
    value: strType(''),
    iconLeft: strType(),
    iconRight: strType(),
    loading: boolType()
  },
  render(h, { props, data, children, listeners }) {
    const { iconLeft, iconRight, loading, value } = props;
    const icn = icon => h(Icon, { class: 'form-icon', props: { icon } });
    const lIcn = iconLeft && icn(iconLeft);
    const rIcn =
      (iconRight && icn(iconRight)) ||
      (loading && h('i', { staticClass: 'form-icon loading' }));

    if (data.model) {
      const cb = data.on.input;
      data.on.input = ev => cb(ev.target.value);
    }

    let vm = h(
      props.tag,
      mergeData(data, colorData('is', props), sizeData('input', props), {
        staticClass: 'form-input',
        attrs: { type: data.attrs.type || 'text' },
        domProps: { value },
        on: listeners
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
