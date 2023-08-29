import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { Indicator, IndicatorProps } from './Indicator';

const defaultProps: IndicatorProps = {
  children: 'Child',
};

describe('@reactgets/core/Indicator', () => {
  itRendersChildren(Indicator, defaultProps);
  itSupportsProviderVariant(Indicator, defaultProps, 'Indicator');
  itSupportsProviderSize(Indicator, defaultProps, 'Indicator');
  itSupportsSystemProps({
    component: Indicator,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/Indicator',
  });

  it('renders given label', () => {
    render(<Indicator {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('does not render indicator if component is disabled', () => {
    render(<Indicator {...defaultProps} label="test-label" disabled />);
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
  });
});
