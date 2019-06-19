import { arrayContains } from '@/utils/array';

describe('array utilies', () => {
  test('should return true when contained elements', () => {
    const items = ['1', '2', '3'];
    expect(arrayContains(items, '1')).toBeTruthy();
    expect(arrayContains(items, '2')).toBeTruthy();
    expect(arrayContains(items, '3')).toBeTruthy();
    expect(arrayContains(items, '1', '3')).toBeTruthy();
    expect(arrayContains(items, '1', '2')).toBeTruthy();
    expect(arrayContains(items, '2', '3')).toBeTruthy();
  });
});
