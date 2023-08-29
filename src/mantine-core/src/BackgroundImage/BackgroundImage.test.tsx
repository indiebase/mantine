import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itIsPolymorphic,
  itRendersChildren,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { BackgroundImage, BackgroundImageProps } from './BackgroundImage';

const defaultProps: BackgroundImageProps = {
  src: './image.png',
};

describe('@reactgets/core/BackgroundImage', () => {
  itIsPolymorphic(BackgroundImage, defaultProps);
  itRendersChildren(BackgroundImage, defaultProps);
  itSupportsProviderVariant(BackgroundImage, defaultProps, 'BackgroundImage');
  itSupportsSystemProps({
    component: BackgroundImage,
    props: defaultProps,
    displayName: '@reactgets/core/BackgroundImage',
    refType: HTMLDivElement,
    providerName: 'BackgroundImage',
  });

  it('sets correct image as background', () => {
    const { container } = render(<BackgroundImage src="./image" />);
    expect(container.firstChild).toHaveStyle({ backgroundImage: "url('./image')" });
  });
});
