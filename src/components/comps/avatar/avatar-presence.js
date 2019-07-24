import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { getAvatar } from '@/utils/get-var';
import memoize from '@/utils/memoize';
import { boolKeys } from '@/utils/object';

const cprops = memoize(() => {
  // online, offince, busy
  const props = getAvatar().presences.reduce(
    (o, v) => (o[v] = boolType()) && o,
    Object.create(null)
  );
  return {
    tag: strType('i'),
    ...props
  };
});

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'avatar-presence',
        class: boolKeys(props)
      }),
      children
    );
  }
};
