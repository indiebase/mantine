import React from 'react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Spoiler, SpoilerProps } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@reactgets/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsProviderVariant(Spoiler, defaultProps, 'Spoiler');
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: '@reactgets/core/Spoiler',
    refType: HTMLDivElement,
    providerName: 'Spoiler',
  });
});
