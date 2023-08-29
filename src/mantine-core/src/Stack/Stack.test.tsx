import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@reactgets/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsProviderVariant(Stack, defaultProps, 'Stack');
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@reactgets/core/Stack',
    refType: HTMLDivElement,
    providerName: 'Stack',
  });
});
