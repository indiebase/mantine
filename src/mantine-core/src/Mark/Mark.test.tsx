import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@reactgets/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsProviderVariant(Mark, defaultProps, 'Mark');
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@reactgets/core/Mark',
    refType: HTMLElement,
    providerName: 'Mark',
  });
});
