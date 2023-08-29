import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@reactgets/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsProviderVariant(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsProviderSize(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@reactgets/core/ThemeIcon',
    refType: HTMLDivElement,
    providerName: 'ThemeIcon',
  });
});
