import { boolType } from '@/utils/proptypes';

export const activeData = props =>
  props.active ? { staticClass: 'active' } : {};

export default { props: { active: boolType() } };
