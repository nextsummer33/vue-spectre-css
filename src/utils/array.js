export const contains = (arr, ...items) => {
  for (const item of items) {
    if (arr.indexOf(item) === -1) return false;
  }
  return true;
};

export default {
  contains
};
