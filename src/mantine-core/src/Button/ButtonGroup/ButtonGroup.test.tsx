import { itSupportsSystemProps, itRendersChildren } from '@reactgets/tests';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@reactgets/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps);
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/ButtonGroup',
    providerName: 'ButtonGroup',
  });
});
