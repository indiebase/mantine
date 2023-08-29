import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderSize,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { AlphaSlider, AlphaSliderProps } from './AlphaSlider';

const defaultProps: AlphaSliderProps = {
  value: 0.5,
  onChange: () => {},
  onChangeEnd: () => {},
  color: '#FF00FF',
  size: 'sm',
};

describe('@reactgets/core/AlphaSlider', () => {
  checkAccessibility([<AlphaSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsProviderSize(AlphaSlider, defaultProps, 'AlphaSlider', 'slider');
  itSupportsProviderVariant(AlphaSlider, defaultProps, 'AlphaSlider', 'slider');
  itSupportsSystemProps({
    component: AlphaSlider,
    props: defaultProps,
    displayName: '@reactgets/core/AlphaSlider',
    refType: HTMLDivElement,
    providerName: 'AlphaSlider',
  });
});
