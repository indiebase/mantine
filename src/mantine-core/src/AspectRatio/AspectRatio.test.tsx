import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@reactgets/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsProviderVariant(AspectRatio, defaultProps, 'AspectRatio');
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@reactgets/core/AspectRatio',
    refType: HTMLDivElement,
    providerName: 'AspectRatio',
  });
});
