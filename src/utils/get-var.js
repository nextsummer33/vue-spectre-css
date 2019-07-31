import memorize from './memoize';
import vars from './variables';

const getVariable = memorize(name => {
  const v = vars[name] || {};
  if (Array.isArray(v)) {
    return [...v];
  } else if (Object.getOwnPropertyNames(v).length > 0) {
    return Object.assign({}, v);
  }
  return {};
});

export const getDirections = () => getVariable('directions');
export const getLayout = () => getVariable('layout');
export const getColors = () => getVariable('colors');
export const getButton = () => getVariable('button');
export const getIcon = () => getVariable('icon');
export const getLabel = () => getVariable('label');
export const getImage = () => getVariable('image');
export const getVideo = () => getVariable('video');
export const getLang = () => getVariable('lang');
export const getInput = () => getVariable('input');
export const getForm = () => getVariable('form');
export const getAvatar = () => getVariable('avatar');
export const getToast = () => getVariable('toast');
export const getModal = () => getVariable('modal');

export default {
  getDirections,
  getLayout,
  getButton,
  getColors,
  getIcon,
  getLabel,
  getImage,
  getVideo,
  getLang,
  getInput,
  getForm,
  getAvatar,
  getToast,
  getModal
};
