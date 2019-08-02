export function isDescendant(parent, child) {
  let node = child.parentNode;

  while (node) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

export default {
  isDescendant
};
