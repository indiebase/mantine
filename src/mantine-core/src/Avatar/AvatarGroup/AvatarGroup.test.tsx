import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
};

describe('@reactgets/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps);
  itSupportsProviderVariant(AvatarGroup, defaultProps, 'AvatarGroup');
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/AvatarGroup',
    providerName: 'AvatarGroup',
  });
});
