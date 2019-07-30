import Input from './input';
export { Color, colorData, Size, sizeData, Inline, inlineData } from './input';

export { activeData } from './active';
import active from './active';
export const Active = active;

export { badgeData } from './badge';
import badge from './badge';
export const Badge = badge;

export { tooltipData } from './tooltip';
import tooltip from './tooltip';
export const Tooltip = tooltip;

export { allSizeData } from './allSize';
import allSize from './allSize';
export const AllSize = allSize;

export const InputMixins = Input;
export const ActiveMixins = [Active];

export default {};
