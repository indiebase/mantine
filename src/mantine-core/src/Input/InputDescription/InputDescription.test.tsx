import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { InputDescription, InputDescriptionProps } from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@reactgets/core/InputDescription', () => {
  itRendersChildren(InputDescription, defaultProps);
  itSupportsProviderVariant(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsProviderSize(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsSystemProps({
    component: InputDescription,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/InputDescription',
    providerName: 'InputDescription',
  });
});
