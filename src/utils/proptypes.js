export function boolType(val = false, validator = undefined) {
  return {
    type: Boolean,
    default: val,
    validator
  };
}

export function strType(val = null, validator = undefined) {
  return {
    type: String,
    default: val,
    validator
  };
}

export function arrType(val = [], validator = undefined) {
  return {
    type: Array,
    default: () => val,
    validator
  };
}

export function numType(val = 0, validator = undefined) {
  return {
    type: Number,
    default: val,
    validator
  };
}

export function strArrType(val = [], validator = undefined) {
  return {
    type: [String, Array],
    default: val,
    validator
  };
}
export default {
  boolType,
  strType,
  arrType,
  numType,
  strArrType
};
