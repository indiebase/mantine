import { itSupportsSystemProps } from '@reactgets/tests';
import { ColorSlider, ColorSliderProps } from './ColorSlider';

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
};

describe('@reactgets/core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: '@reactgets/core/ColorSlider',
    refType: HTMLDivElement,
  });
});
