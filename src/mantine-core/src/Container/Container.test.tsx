import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@reactgets/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsProviderVariant(Container, defaultProps, 'Container');
  itSupportsProviderSize(Container, defaultProps, 'Container');
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@reactgets/core/Container',
    refType: HTMLDivElement,
    providerName: 'Container',
  });
});
