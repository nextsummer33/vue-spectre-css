import { SBtn } from '@/components/elements/';
import { Tooltip, tooltipData } from '@/components/mixins';
import { mergeData } from 'vue-functional-data-merge';

export default {
  extends: SBtn,
  mixins: [Tooltip],
  render(h, context) {
    context.data = mergeData(
      context.data,
      tooltipData({ tooltip: context.props.tooltip }),
      { staticClass: 'bar-slider-btn', attrs: { role: 'slider' } }
    );
    return SBtn.render(h, context);
  }
};
