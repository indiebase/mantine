import React from 'react';
import { Carousel } from '@reactgets/carousel';
import { Image } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { images as _images } from './_images';

const code = `
import { Carousel } from '@reactgets/carousel';
import { Image } from '@reactgets/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel maw={320} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}
`;

function Demo() {
  const slides = _images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel maw={320} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}

export const images: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
