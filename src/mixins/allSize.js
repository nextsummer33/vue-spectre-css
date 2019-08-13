import { boolType } from '@/utils/proptypes';
import { getLayout } from '@/utils/get-var';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  const props = getLayout().viewports.reduce(
    (p, v) => (p[v] = boolType()) && p,
    Object.create(null)
  );
  return props;
});

export function allSizeData(prefix, props) {
  return {
    class: getLayout().viewports.reduce((arr, s) => {
      props[s] && arr.push(prefix + '-' + s);
      return arr;
    }, [])
  };
}

export default { props: cprops() };
