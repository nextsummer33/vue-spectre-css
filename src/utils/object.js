export const boolKeys = o => {
  return Object.entries(o)
    .filter(p => typeof p[1] === 'boolean' && p[1])
    .map(p => p[0]);
};

export const isExist = v => {
  return v !== undefined && v !== null;
};

export default {
  boolKeys,
  isExist
};
