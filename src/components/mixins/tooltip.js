import { strType, boolType } from '@/utils/proptypes';
import { isExist } from '@/utils/object';
import { getDirections } from '@/utils/get-var';

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

const cprops = () =>
  getDirections().reduce((o, v) => (o[v] = boolType()) && o, {
    tooltip: strType()
  });

export default {
  props: cprops()
};
