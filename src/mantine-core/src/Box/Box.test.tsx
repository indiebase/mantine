import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@reactgets/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@reactgets/core/Box', () => {
  itRendersChildren(Box as any, defaultProps);
  itIsPolymorphic(Box as any, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@reactgets/core/Box',
    refType: HTMLDivElement,
  });
});
