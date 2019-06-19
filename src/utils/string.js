export const capFirst = str => {
  if (typeof str !== 'string') {
    throw new Error('Value should be a string.');
  } else {
    const normStr = str.trim();
    if (normStr.length > 0) {
      return normStr.charAt(0).toUpperCase() + normStr.substr(1).toLowerCase();
    }
  }

  return '';
};

const splitRegx = /(?=[A-Z])/;

export const splitCamelCase = str => {
  const s = str.length > 0 ? str[0].toLowerCase() + str.substr(1) : str;
  return s.split(splitRegx).map(s => s.toLowerCase());
};

export const dashCase = str => {
  return splitCamelCase(str).join('-');
};

export default {
  capFirst,
  dashCase,
  splitCamelCase
};
