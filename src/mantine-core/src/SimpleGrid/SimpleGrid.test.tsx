import React from 'react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@reactgets/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsProviderVariant(SimpleGrid, defaultProps, 'SimpleGrid');
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@reactgets/core/SimpleGrid',
    refType: HTMLDivElement,
    providerName: 'SimpleGrid',
  });
});
