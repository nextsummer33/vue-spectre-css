import memorize from './memoize';
import variables from './variables';

const getVariable = name => {
  const result = variables[name];
  return result || {};
};

export const getCachedLayout = memorize(() => {
  const variable = getVariable('layout');
  if (Array.isArray(variable)) {
    return [...variable];
  } else if (Object.getOwnPropertyNames(variable).length > 0) {
    return Object.assign({}, variable);
  }

  return {};
});

export default {
  getCachedLayout
};
