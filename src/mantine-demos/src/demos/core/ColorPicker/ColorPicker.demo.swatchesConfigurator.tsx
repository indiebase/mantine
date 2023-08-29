import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DEFAULT_THEME, ColorPicker, ColorPickerProps } from '@reactgets/core';

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      mx="auto"
      format="hex"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      {...props}
    />
  );
}

const codeTemplate = (props: string) => `
import { ColorPicker } from '@reactgets/core';

function Demo() {
  return (
    <ColorPicker${props} format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors)
  .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
  .join(', ')}]} />
  );
}
`;

export const swatchesConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'swatchesPerRow', type: 'number', initialValue: 10, defaultValue: 10, min: 5, max: 20 },
  ],
};
