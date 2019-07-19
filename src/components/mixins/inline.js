import { boolType } from '@/utils/proptypes';

export function inlineData(props) {
  return {
    class: {
      'form-inline': props.inline
    }
  };
}

export default { props: { inline: boolType() } };
