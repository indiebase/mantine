import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { ColorInput } from '@reactgets/core';

const code = `
import { ColorInput } from '@reactgets/core';

function Demo() {
  return (
    <ColorInput
      withEyeDropper
      placeholder="With eye dropper"
      label="Pick any color from the page"
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      withEyeDropper
      placeholder="With eye dropper"
      label="Pick any color from the page"
    />
  );
}

export const eyeDropper: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
