import { strType, numStrBoolType } from '@/utils/proptypes';
import { mergeData } from 'vue-functional-data-merge';
import {
  InputMixins as mixins,
  colorData,
  sizeData,
  inlineData
} from '@/mixins';

export default {
  name: 'SRadio',
  functional: true,
  inheritAttrs: false,
  mixins,
  props: {
    tag: strType('input'),
    checked: numStrBoolType('off'),
    value: numStrBoolType('on'),
    label: strType('Label')
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  render(h, { props, data, listeners }) {
    let { checked, value, tag } = props;
    checked = checked || 'on';
    // callback value handling
    if (data.model) {
      const cb = listeners.change;
      data.on = {
        change: ev => cb(value)
      };
    }
    // update the children dom props based on input value
    const inputVm = h(
      tag,
      mergeData(data, {
        attrs: { type: 'radio' },
        domProps: { checked: checked === value }
      })
    );

    const iconVm = h('i', { staticClass: 'form-icon' });

    return h(
      'label',
      mergeData(
        inlineData('form', props),
        colorData('is', props),
        sizeData('input', props),
        { staticClass: 'form-radio' }
      ),
      [inputVm, iconVm, ' ' + props.label]
    );
  }
};
