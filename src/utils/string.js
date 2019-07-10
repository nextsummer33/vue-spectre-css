export const capf = s => {
  if (typeof s !== 'string') {
    throw new Error('Value should be a string.');
  }
  s = s.trim();
  return s.length ? s.charAt(0).toUpperCase() + s.substr(1).toLowerCase() : s;
};

const splitRegx = /(?=[A-Z])/;

export const splitCamelCase = str => {
  const s = str.length ? str.charAt(0).toLowerCase() + str.substr(1) : str;
  return s.split(splitRegx).map(s => s.toLowerCase());
};

export const dashCase = s => splitCamelCase(s).join('-');

export default {
  capf,
  dashCase,
  splitCamelCase
};
