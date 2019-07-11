import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getLang } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';
import { dashCase } from '@/utils/string';

const cprops = memoize(() => {
  const { kinds } = getLang();
  const props = kinds.reduce(
    (p, v) => (p[v] = boolType()) && p,
    Object.create(null)
  );

  return {
    tag: strType('p'),
    cjk: boolType(),
    ...props
  };
});

export default {
  name: 'SLang',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        class: boolKeys(props).map(v => 'lang-' + dashCase(v))
      }),
      children
    );
  }
};
