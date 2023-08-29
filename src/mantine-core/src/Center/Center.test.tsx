import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps = {
  children: 'test-center',
};

describe('@reactgets/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsProviderVariant(Center, defaultProps, 'Center');
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@reactgets/core/Center',
    refType: HTMLDivElement,
    providerName: 'Center',
  });
});
