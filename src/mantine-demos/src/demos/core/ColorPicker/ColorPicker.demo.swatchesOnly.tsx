import React, { useState } from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DEFAULT_THEME, Text, ColorPicker, Box } from '@reactgets/core';

const code = `
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text, Box } from '@reactgets/core';

function Demo() {
  const [value, onChange] = useState(null);

  return (
    <Box maw={200} mx="auto">
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red,
          ...DEFAULT_THEME.colors.green,
          ...DEFAULT_THEME.colors.blue,
        ]}
      />
      <Text align="center" mt={5}>
        {value}
      </Text>
    </Box>
  );
}
`;

function Demo() {
  const [value, onChange] = useState(null);

  return (
    <Box maw={200} mx="auto">
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red,
          ...DEFAULT_THEME.colors.green,
          ...DEFAULT_THEME.colors.blue,
        ]}
      />
      <Text align="center" mt={5}>
        {value}
      </Text>
    </Box>
  );
}

export const swatchesOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
