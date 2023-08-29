import React from 'react';
import { useMantineTheme, Text, Group, Code, rem } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useResizeObserver } from '@reactgets/hooks';

const code = `
import { Text, Code, rem } from '@reactgets/core';
import { useResizeObserver } from '@reactgets/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <Text align="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group position="center">
        <textarea
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            border: 'none',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
