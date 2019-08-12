import { boolType, numStrBoolType, allType, strType } from '@/utils/proptypes';
import { mergeData } from 'vue-functional-data-merge';
import {
  InputMixins as mixins,
  colorData,
  sizeData,
  inlineData
} from '@/components/mixins';
import { isExist, isObj } from '@/utils/object';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  return {
    tag: strType('input'),
    checked: allType(false),
    falseValue: numStrBoolType(null),
    indeterminate: boolType(),
    label: strType('Label'),
    switch: boolType(),
    trueValue: numStrBoolType(null),
    value: numStrBoolType(true)
  };
});

function render(h, { props, data, listeners }) {
  const { tag, checked, value, trueValue, falseValue } = props;
  const tv = isExist(trueValue) ? trueValue : value;
  const fv = isExist(falseValue) ? falseValue : false;
  const isChk = checked === tv;
  // callback value handling
  if (data.model) {
    const cb = listeners.change;
    const change = ev => {
      let v = ev.target.checked;
      if (isObj(checked)) {
        if (v) {
          checked.push(tv);
        } else {
          const i = checked.indexOf(tv);
          i > -1 && checked.splice(i, 1);
        }
        v = checked;
      } else {
        v = v ? tv : fv;
      }
      cb(v);
    };
    data.on = { change };
  }

  const inputVm = h(
    tag,
    mergeData(data, {
      attrs: { type: 'checkbox' },
      domProps: {
        checked: isChk,
        indeterminate: props.indeterminate
      }
    })
  );
  const iconVm = h('i', { staticClass: 'form-icon' });
  return h(
    'label',
    mergeData(
      inlineData('form', props),
      colorData('is', props),
      sizeData('input', props),
      { staticClass: props.switch ? 'form-switch' : 'form-checkbox' }
    ),
    [inputVm, iconVm, ' ' + props.label]
  );
}

export default {
  name: 'SCheckbox',
  functional: true,
  mixins,
  model: {
    prop: 'checked',
    event: 'change'
  },
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render
};
