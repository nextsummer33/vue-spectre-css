import { boolType } from '@/utils/proptypes';

export const activeData = props =>
  Object.freeze({ staticClass: props.active ? 'active' : '' });

export default { props: { active: boolType() } };
