export function isDescendant(parent, node) {
  while ((node = node.parentNode)) {
    if (node === parent) return true;
  }
  return false;
}

export function debounce(fn, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

export default {
  isDescendant,
  debounce
};
