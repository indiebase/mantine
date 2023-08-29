import { itSupportsClassName, itSupportsStyle } from '@reactgets/tests';
import { Thumb, ThumbProps } from './Thumb';

const defaultProps: ThumbProps = {
  __staticSelector: 'Test',
  position: { x: 0.4, y: 0.5 },
  size: 'sm',
};

describe('@reactgets/core/Thumb', () => {
  itSupportsClassName(Thumb, defaultProps);
  itSupportsStyle(Thumb, defaultProps);

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@reactgets/core/Thumb');
  });
});
