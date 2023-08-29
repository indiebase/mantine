import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@reactgets/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '50rem' }} />,
};

describe('@reactgets/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/Collapse',
    providerName: 'Collapse',
  });
});
