import { boolType } from '@/utils/proptypes';

export function activeData(props) {
  return {
    class: {
      active: props.active
    }
  };
}

export default { props: { active: boolType() } };
