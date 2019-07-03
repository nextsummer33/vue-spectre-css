export function boolType(defaultVal = false, validator = undefined) {
  return {
    type: Boolean,
    default: defaultVal,
    validator
  };
}

export function stringType(defaultVal = null, validator = undefined) {
  return {
    type: String,
    default: defaultVal,
    validator
  };
}

export default {
  boolType,
  stringType
};
