import Link from '@/components/elements/link';
import { mergeData } from 'vue-functional-data-merge';

export default {
  extends: Link,
  render(h, context) {
    context.props.to = '#close';
    context.data = mergeData(context.data, {
      staticClass: 'modal-overlay',
      attrs: { 'aria-label': 'Close' }
    });
    return Link.render(h, context);
  }
};
