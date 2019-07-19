import { Color, colorData } from '@/components/mixins';
import { getForm } from '@/utils/get-var';
import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType, numStrObjType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { Input, Radio, Select, Checkbox } from '../inputs';
import { isStr, isNum } from '@/utils/object';
import { FormLabel, FormHint as FH } from './index';
import Col from '@/components/layouts/col';

const cprops = memoize(() => {
  let props = getForm().types.reduce((p, v) => (p[v] = boolType()) && p, {});
  return {
    tag: strType('div'),
    hint: strType(),
    title: strType(),
    lhs: numStrObjType(() => {}),
    rhs: numStrObjType(() => {}),
    ...props
  };
});

const wrapEls = (h, p, ch) => {
  const col = isStr(p) || isNum(p) ? parseInt(p) : undefined;
  const props = col ? { noColumn: true, col } : { noColumn: true, ...p };
  return p ? [h(Col, { props }, ch)] : [ch];
};

function render(h, { props, data, slots, children }) {
  const { title, hint } = props;
  const attrs = data && data.attrs ? data.attrs : {};
  const slotEls = slots();

  if (attrs.switch != null) {
    // when switch is on, force using checkbox
    props.checkbox = true;
  } else if (props.textarea) {
    // using textarea when it is on
    data.props = {
      tag: props.textarea ? 'textarea' : undefined
    };
  }

  // create a label elemnt
  const labelEl = () => {
    const { id, sm, lg } = attrs;
    return h(FormLabel, { attrs: { for: id, sm, lg } }, title);
  };

  // input slot or create an element for the specified input
  const inputEl = () => {
    const el =
      (props.select && Select) ||
      (props.radio && Radio) ||
      (props.checkbox && Checkbox) ||
      Input;
    return slotEls.input || h(el, data, slotEls.select);
  };

  const els = slotEls.default || [
    ...wrapEls(h, props.lhs, [(title && labelEl()) || undefined]),
    ...wrapEls(h, props.rhs, [inputEl(), (hint && h(FH, hint)) || undefined])
  ];

  return h(
    props.tag,
    mergeData({ staticClass: 'form-group' }, colorData('has', props)),
    els
  );
}

export default {
  functional: true,
  mixins: [Color],
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render
};
