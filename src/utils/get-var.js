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

export const getLayout = () => getVariable('layout');
export const getColors = () => getVariable('colors');
export const getButton = () => getVariable('button');
export const getIcon = () => getVariable('icon');
export const getLabel = () => getVariable('label');
export const getImage = () => getVariable('image');
export const getVideo = () => getVariable('video');
export const getLang = () => getVariable('lang');

export default {
  getLayout,
  getButton,
  getColors,
  getIcon,
  getLabel,
  getImage,
  getVideo,
  getLang
};
