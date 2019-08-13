export const capf = s => {
  s = s.trim();
  return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
};

const splitRegx = /(?=[A-Z])/;

export const splitCamelCase = s => {
  s = s.trim();
  s = s.charAt(0).toLowerCase() + s.substr(1);
  return s.split(splitRegx).map(s => s.toLowerCase());
};

export const dashCase = s => splitCamelCase(s).join('-');

export default {
  capf,
  dashCase,
  splitCamelCase
};
