// ref: https://gist.github.com/iperelivskiy/4110988
export const hash = s => {
  for (var i = 0, h = 0xdeadbeef; i < s.length; i++)
    h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
  return (h ^ (h >>> 16)) >>> 0;
};

export const memoize = (fn, hashable) => {
  !fn.__cache && (fn.__cache = Object.create(null));
  return (...args) => {
    const j = JSON.stringify(args);
    const k = hashable ? hash(j) : j;
    return (fn.__cache[k] = fn.__cache[k] || fn.apply(null, args));
  };
};

export default memoize;
