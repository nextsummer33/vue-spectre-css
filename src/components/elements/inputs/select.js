import { arrType, strType, strArrType } from '@/utils/proptypes';
import { contains } from '@/utils/array';
import { isExist, isObj, isStr } from '@/utils/object';
import { mergeData } from 'vue-functional-data-merge';
import { Color, Size, colorData, sizeData } from '@/mixins';

export default {
  name: 'SSelect',
  functional: true,
  mixins: [Color, Size],
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    tag: strType('select'),
    items: arrType(),
    placeholder: strType(),
    value: strArrType(() => [])
  },
  render(h, { props, data, children, listeners }) {
    const { tag, placeholder, items, value } = props;
    const attrs = (data && data.attrs) || {};
    const multi = isExist(attrs.multiple);
    // props value fixed based on multiple or single selection mode
    const _v = multi ? (isObj(value) ? value : []) : isStr(value) ? value : '';
    // callback value handling
    if (data.model) {
      const cb = listeners.change;
      const change = ({ target }) =>
        multi
          ? cb(children.filter(op => op.elm.selected).map(op => op.elm.value))
          : cb(target.value);
      data.on = { change };
    }
    // update the children dom props based on input value
    const opEl = (t, v) => {
      const domProps = { selected: multi ? contains(_v, v) : _v === v };
      return h('option', { attrs: { value: v }, domProps }, t);
    };
    children = children || items.map(i => opEl(i.text, i.value));

    return h(
      tag,
      mergeData(data, colorData('is', props), sizeData('select', props), {
        staticClass: 'form-select',
        domProps: multi ? {} : { value: _v }
      }),
      placeholder ? [opEl(placeholder, ''), ...children] : children
    );
  }
};
