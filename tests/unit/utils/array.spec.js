import { contains } from '@/utils/array';

describe('array utilies', () => {
  test('should check contained elements', () => {
    const items = ['1', '2', '3'];
    expect(contains(items, '1')).toBeTruthy();
    expect(contains(items, '2')).toBeTruthy();
    expect(contains(items, '3')).toBeTruthy();
    expect(contains(items, '1', '3')).toBeTruthy();
    expect(contains(items, '1', '2')).toBeTruthy();
    expect(contains(items, '2', '3')).toBeTruthy();
    expect(contains(items, '2', '3', '4')).toBeFalsy();
  });
});
