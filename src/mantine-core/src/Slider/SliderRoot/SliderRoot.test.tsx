import React from 'react';
import { itSupportsSystemProps } from '@reactgets/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
  variant: '',
};

describe('@reactgets/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@reactgets/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
