import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = {
  children: 'test',
};

describe('@reactgets/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsProviderVariant(Kbd, defaultProps, 'Kbd');
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@reactgets/core/Kbd',
    refType: HTMLElement,
    providerName: 'Kbd',
  });
});
