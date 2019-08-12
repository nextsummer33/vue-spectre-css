const ud = undefined;

const declare = (t, v, vlr = ud) => ({
  type: t,
  default: v,
  validator: vlr
});

export const boolType = (v = false, vlr = ud) => declare(Boolean, v, vlr);

export const strType = (v = null, vlr = ud) => declare(String, v, vlr);

export const arrType = (v = () => [], vlr = ud) => declare(Array, v, vlr);

export const numType = (v = 0, vlr = ud) => declare(Number, v, vlr);

export const objType = (v = () => {}, vlr = ud) => declare(Object, v, vlr);

export const numStrType = (v = null, vlr = ud) =>
  declare([String, Number], v, vlr);

export const strArrType = (v = () => [], vlr = ud) =>
  declare([String, Array], v, vlr);

export const numStrBoolType = (v = false, vlr = ud) =>
  declare([Number, String, Boolean], v, vlr);

export const numStrObjType = (v = null, vlr = ud) =>
  declare([Number, String, Boolean, Object], v, vlr);

export const allType = (v = null, vlr = ud) =>
  declare([Array, Number, String, Boolean], v, vlr);

export const numStrArrType = (v = null, vlr = ud) =>
  declare([Number, String, Array], v, vlr);

export default {
  allType,
  arrType,
  boolType,
  numStrArrType,
  numStrBoolType,
  numStrObjType,
  numStrType,
  numType,
  objType,
  strArrType,
  strType
};
