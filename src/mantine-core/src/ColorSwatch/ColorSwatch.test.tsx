import {
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps = {
  color: '#fff',
};

describe('@reactgets/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch as any, defaultProps);
  itSupportsProviderVariant(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsProviderSize(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@reactgets/core/ColorSwatch',
    refType: HTMLDivElement,
    providerName: 'ColorSwatch',
  });
});
