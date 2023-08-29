import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { InputLabel, InputLabelProps } from './InputLabel';

const defaultProps: InputLabelProps = {};

describe('@reactgets/core/InputLabel', () => {
  itRendersChildren(InputLabel, defaultProps);
  itSupportsProviderVariant(InputLabel, defaultProps, 'InputWrapper', 'label');
  itSupportsProviderSize(InputLabel, defaultProps, 'InputWrapper', 'label');
  itSupportsSystemProps({
    component: InputLabel,
    props: defaultProps,
    displayName: '@reactgets/core/InputLabel',
    refType: HTMLLabelElement,
    providerName: 'InputLabel',
  });

  it('renders required asterisk if required prop is true', () => {
    render(<InputLabel required />);
    expect(document.querySelector('.mantine-InputWrapper-required')).toBeInTheDocument();
  });

  it('does not render required asterisk if required prop is false', () => {
    render(<InputLabel required={false} />);
    expect(document.querySelector('.mantine-InputWrapper-required')).not.toBeInTheDocument();
  });
});
