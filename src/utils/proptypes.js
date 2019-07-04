export function boolType(val = false, validator = undefined) {
  return {
    type: Boolean,
    default: val,
    validator
  };
}

export function stringType(val = null, validator = undefined) {
  return {
    type: String,
    default: val,
    validator
  };
}

export default {
  boolType,
  stringType
};
