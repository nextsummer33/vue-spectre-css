import { strType, boolType } from '@/utils/proptypes';
import { isExist } from '@/utils/object';

const positions = ['left', 'top', 'right', 'bottom'];

export function tooltipData(props) {
  if (!isExist(props.tooltip)) return {};

  let posCls = props.tooltipLeft
    ? ' tooltip-left'
    : props.tooltipBottom
    ? ' tooltip-bottom'
    : props.tooltipRight
    ? ' tooltip-right'
    : '';

  return {
    staticClass: 'tooltip' + posCls,
    attrs: { 'data-tooltip': '' + props.tooltip }
  };
}

export default {
  props: {
    tooltip: strType(),
    tooltipLeft: boolType(),
    tooltipTop: boolType(),
    tooltipRight: boolType(),
    tooltipBottom: boolType()
  }
};
