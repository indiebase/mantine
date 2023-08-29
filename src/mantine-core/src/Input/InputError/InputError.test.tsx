import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { InputError, InputErrorProps } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@reactgets/core/InputError', () => {
  itRendersChildren(InputError, defaultProps);
  itSupportsProviderVariant(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsProviderSize(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsSystemProps({
    component: InputError,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/InputError',
    providerName: 'InputError',
  });
});
