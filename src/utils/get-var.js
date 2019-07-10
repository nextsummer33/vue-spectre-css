import memorize from './memoize';
import variables from './variables';

const getVariable = memorize(name => {
  const variable = variables[name] || {};
  if (Array.isArray(variable)) {
    return [...variable];
  } else if (Object.getOwnPropertyNames(variable).length > 0) {
    return Object.assign({}, variable);
  }
  return {};
});

export const getLayout = () => getVariable('layout');
export const getColors = () => getVariable('colors');
export const getButton = () => getVariable('button');
export const getIcon = () => getVariable('icon');

export default {
  getLayout,
  getButton,
  getColors,
  getIcon
};
