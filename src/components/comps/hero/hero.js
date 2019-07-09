import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import Body from './hero-body';

const cprops = memoize(() => {
  return {
    tag: strType('div'),
    sm: boolType(false),
    lg: boolType(false)
  };
});

export default {
  name: 'SHero',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children, slots }) {
    children = [h(Body, {}, slots().default || [])];
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'hero',
        class: [props.sm && 'hero-sm', props.lg && 'hero-lg'].filter(Boolean)
      }),
      children
    );
  }
};
