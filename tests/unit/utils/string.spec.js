import { capf, splitCamelCase, dashCase } from '@/utils/string';

describe('string utils', () => {
  test('capf > should throw an error when value is invalid type', () => {
    const temp = console.error;
    expect(() => {
      capf(1);
    }).toThrowError('Value should be a string.');
    console.error = temp;
  });

  test('capf > capital first letter of a string', () => {
    expect(capf('apple')).toBe('Apple');
    expect(capf('ApPle')).toBe('Apple');
    expect(capf(' apple ')).toBe('Apple');
    expect(capf('apple ')).toBe('Apple');
    expect(capf(' ')).toBe('');
    expect(capf('')).toBe('');
    expect(capf(' this is a')).toBe('This is a');
  });

  test('splitCamelCase > split as expected', () => {
    expect(splitCamelCase('xsAuto')).toEqual(
      expect.arrayContaining(['xs', 'auto'])
    );
    expect(splitCamelCase('abCdEf')).toEqual(
      expect.arrayContaining(['ab', 'cd', 'ef'])
    );
    expect(splitCamelCase('a')).toEqual(expect.arrayContaining(['a']));
    expect(splitCamelCase('ABCD')).toEqual(
      expect.arrayContaining(['a', 'b', 'c', 'd'])
    );
  });

  test('dashCase > convert into a dash case form', () => {
    expect(dashCase('abCd')).toBe('ab-cd');
    expect(dashCase('aBbCcDd')).toBe('a-bb-cc-dd');
    expect(dashCase('abCdDF')).toBe('ab-cd-d-f');
    expect(dashCase('AbCdDF')).toBe('ab-cd-d-f');
  });
});
