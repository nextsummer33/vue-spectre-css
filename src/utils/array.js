export const arrayContains = (arr, ...items) => {
  for (const item of items) {
    if (arr.indexOf(item) === -1) {
      return false;
    }
  }
  return true;
};

export default {
  arrayContains
};
