import Input from './input';
export { Color, colorData, Size, sizeData, Inline, inlineData } from './input';

export { activeData } from './active';
import active from './active';
export const Active = active;

export const InputMixins = Input;
export const ActiveMixins = [Active];

export default {
  InputMixins,
  ActiveMixins
};
