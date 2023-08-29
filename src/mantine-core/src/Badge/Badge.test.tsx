import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {};

describe('@reactgets/core/Badge', () => {
  itRendersChildren(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps);
  itSupportsProviderVariant(Badge, defaultProps, 'Badge');
  itSupportsProviderSize(Badge, defaultProps, 'Badge');
  itSupportsSystemProps({
    component: Badge,
    props: defaultProps,
    displayName: '@reactgets/core/Badge',
    refType: HTMLDivElement,
  });

  it('renders given left and right section', () => {
    const { container } = render(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(container.querySelector('.mantine-Badge-rightSection').textContent).toBe('test-right');
    expect(container.querySelector('.mantine-Badge-leftSection').textContent).toBe('test-left');
  });
});
