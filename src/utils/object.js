export const boolKeys = o => {
  return Object.entries(o)
    .filter(p => typeof p[1] === 'boolean' && p[1])
    .map(p => p[0]);
};

export const isExist = v => v !== undefined && v !== null;
export const isObj = v => typeof v === 'object';
export const isStr = v => typeof v === 'string';
export const isFn = v => typeof v === 'function';

export default {
  boolKeys,
  isExist
};
