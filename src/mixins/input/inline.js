import { boolType } from '@/utils/proptypes';

export function inlineData(prefix, props) {
  return {
    class: {
      [prefix + '-inline']: props.inline
    }
  };
}

export default { props: { inline: boolType() } };
