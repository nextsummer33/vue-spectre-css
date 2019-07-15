import { mergeData } from 'vue-functional-data-merge';
import mixins, { colorData, sizeData } from '../mixins/input';
import { arrType, strType, strArrType } from '@/utils/proptypes';
import { isExist, isObj, isStr } from '@/utils/object';
import { arrayContains } from '@/utils/array';

export default {
  functional: true,
  mixins,
  props: {
    items: arrType(),
    placeholder: strType(),
    value: strArrType(() => [])
  },
  render(h, { props, data, children, listeners }) {
    const { placeholder, items, value } = props;
    const multi = isExist(data.attrs.multiple);
    // props value fixed based on multiple or single selection mode
    const _v = multi ? (isObj(value) ? value : []) : isStr(value) ? value : '';

    // callback value handling
    if (data.model) {
      const cb = listeners.input || listeners.change;
      data.on = {
        change: ev => {
          if (multi) {
            const v = [];
            for (const op of ev.target.selectedOptions) {
              v.push(op.value);
            }
            cb(v);
          } else {
            cb(ev.target.value);
          }
        }
      };
    }

    // update the children based on input value
    const opElm = (t, v) => {
      const domProps = {
        selected: multi ? arrayContains(_v, v) : _v === v
      };
      return h('option', { attrs: { value: v }, domProps }, t);
    };
    children = children || items.map(i => opElm(i.text, i.value));

    return h(
      'select',
      mergeData(data, colorData('is', props), sizeData('select', props), {
        staticClass: 'form-select',
        domProps: multi ? {} : { value: _v }
      }),
      placeholder ? [opElm(placeholder, ''), ...children] : children
    );
  }
};
