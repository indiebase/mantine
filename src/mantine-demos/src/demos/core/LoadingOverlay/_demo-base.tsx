import React from 'react';
import { DEFAULT_THEME, Box } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';

export const demoBase: Partial<MantineDemo> = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <Box maw={400} mx="auto">
      {children}
    </Box>
  ),
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[0],
};
