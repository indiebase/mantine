import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@reactgets/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsProviderVariant(Footer, defaultProps, 'Footer');
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@reactgets/core/Footer',
    refType: HTMLElement,
    providerName: 'Footer',
  });
});
