import { clamp } from './clamp';

describe('@reactgets/hooks/clamp', () => {
  it('clamps given value', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-10, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });
});
