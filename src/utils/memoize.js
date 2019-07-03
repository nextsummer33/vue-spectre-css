export const memoize = fn => {
  if (!fn.__cache__) {
    Object.assign(fn, {
      __cache__: Object.create(null)
    });
  }

  return (...args) => {
    const key = JSON.stringify(args);
    return (fn.__cache__[key] = fn.__cache__[key] || fn.apply(null, args));
  };
};

export default memoize;
