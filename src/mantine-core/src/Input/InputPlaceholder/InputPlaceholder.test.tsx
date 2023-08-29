import { itSupportsSystemProps, itRendersChildren } from '@reactgets/tests';
import { InputPlaceholder, InputPlaceholderProps } from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@reactgets/core/InputPlaceholder', () => {
  itRendersChildren(InputPlaceholder, defaultProps);
  itSupportsSystemProps({
    component: InputPlaceholder,
    props: defaultProps,
    refType: HTMLSpanElement,
    displayName: '@reactgets/core/InputPlaceholder',
    providerName: 'InputPlaceholder',
  });
});
