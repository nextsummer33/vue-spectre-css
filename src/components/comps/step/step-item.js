import { mergeData } from 'vue-functional-data-merge';
import { SLink } from '@/components/elements';
import { strType } from '@/utils/proptypes';
import { Active, activeData } from '@/components/mixins';
import memoize from '@/utils/memoize';

const cprops = memoize(() => ({
  tag: strType('li'),
  title: strType()
}));

export default {
  functional: true,
  mixins: [Active],
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, slots }) {
    const vdata = mergeData(activeData(props), {
      staticClass: 'step-item'
    });
    const children = [h(SLink, data, props.title || slots().default)];
    return h(props.tag, vdata, children);
  }
};
