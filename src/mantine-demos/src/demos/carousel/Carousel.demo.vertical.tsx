import React from 'react';
import { Carousel } from '@reactgets/carousel';
import { MantineDemo } from '@reactgets/ds';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@reactgets/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators maw={320} mx="auto">
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators maw={320} mx="auto">
      <Slides count={5} />
    </Carousel>
  );
}

export const vertical: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
