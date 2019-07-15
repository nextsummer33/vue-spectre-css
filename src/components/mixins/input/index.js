import ColorMixin from './color';
import SizeMixin from './size';

export { colorData } from './color';
export { sizeData } from './size';

export const Color = ColorMixin;
export const Size = SizeMixin;

export default [Color, Size];
