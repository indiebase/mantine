import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DEFAULT_THEME, Stack, ColorPicker } from '@reactgets/core';

const code = `
import { ColorPicker } from '@reactgets/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <ColorPicker
        format="hex"
        defaultValue="rgba(50, 151, 194, 1)"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </Stack>
  );
}

export const swatches: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
