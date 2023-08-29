import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@reactgets/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itSupportsProviderVariant(UnstyledButton, defaultProps, 'UnstyledButton');
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@reactgets/core/UnstyledButton',
    refType: HTMLButtonElement,
    providerName: 'UnstyledButton',
  });
});
