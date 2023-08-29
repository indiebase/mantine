import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@reactgets/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsProviderVariant(Skeleton, defaultProps, 'Skeleton');
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@reactgets/core/Skeleton',
    refType: HTMLDivElement,
    providerName: 'Skeleton',
  });
});
