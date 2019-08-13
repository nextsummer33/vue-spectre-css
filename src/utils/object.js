export const isExist = v => v !== undefined && v !== null;
export const isObj = v => typeof v === 'object';
export const isStr = v => typeof v === 'string';
export const isBool = v => typeof v === 'boolean';
export const isNum = v => typeof v === 'number';
export const isFn = v => typeof v === 'function';

export const boolKeys = o =>
  Object.entries(o)
    .filter(p => isBool(p[1]) && p[1])
    .map(p => p[0]);

export default {
  boolKeys,
  isExist,
  isObj,
  isStr,
  isBool,
  isNum,
  isFn
};
