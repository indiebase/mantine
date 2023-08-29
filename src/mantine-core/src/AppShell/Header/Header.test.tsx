import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@reactgets/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsProviderVariant(Header, defaultProps, 'Header');
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@reactgets/core/Header',
    refType: HTMLElement,
    providerName: 'Header',
  });
});
