export function boolType(v = false, validator = undefined) {
  return {
    type: Boolean,
    default: v,
    validator
  };
}

export function strType(v = null, validator = undefined) {
  return {
    type: String,
    default: v,
    validator
  };
}

export function arrType(v = [], validator = undefined) {
  return {
    type: Array,
    default: () => v,
    validator
  };
}

export function numType(v = 0, validator = undefined) {
  return {
    type: Number,
    default: v,
    validator
  };
}

export function strArrType(v = [], validator = undefined) {
  return {
    type: [String, Array],
    default: v,
    validator
  };
}

export function numStrBoolType(v = false, validator = undefined) {
  return {
    type: [Number, String, Boolean],
    default: v,
    validator
  };
}

export function allType(v = null, validator = undefined) {
  return {
    type: [Array, Number, String, Boolean],
    default: v,
    validator
  };
}

export default {
  boolType,
  strType,
  arrType,
  numType,
  strArrType,
  numStrBoolType,
  allType
};
