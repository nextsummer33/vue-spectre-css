export const memoize = fn => {
  !fn.__cache && (fn.__cache = Object.create(null));
  return (...args) => {
    const k = JSON.stringify(args);
    return (fn.__cache[k] = fn.__cache[k] || fn.apply(null, args));
  };
};

export default memoize;
