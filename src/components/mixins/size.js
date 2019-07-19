import { boolType } from '@/utils/proptypes';
import { getInput } from '@/utils/get-var';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  const props = getInput().sizes.reduce(
    (p, v) => (p[v] = boolType()) && p,
    Object.create(null)
  );
  return props;
});

export function sizeData(prefix, props) {
  return {
    class: getInput().sizes.reduce((arr, s) => {
      props[s] && arr.push(prefix + '-' + s);
      return arr;
    }, [])
  };
}

export default { props: cprops() };
