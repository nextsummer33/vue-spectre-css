import memoize from '@/utils/memoize';

describe('memoize', () => {
  test('return cached result for same args.', () => {
    let called = 0;
    const sum = (x, y) => {
      called++;
      return x + y;
    };

    const msum = memoize(sum);
    const r1 = msum(1, 2);
    expect(called).toBe(1);
    expect(sum.__cache__['[1,2]']).toBe(r1);

    const r2 = msum(1, 2);
    expect(called).toBe(1);
    expect(r2).toBe(r1);

    const r3 = msum(3, 4);
    expect(called).toBe(2);
    expect(sum.__cache__['[3,4]']).toBe(r3);

    // check numnber of cached values
    expect(Object.getOwnPropertyNames(sum.__cache__).length).toBe(2);
  });
});
