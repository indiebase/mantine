import React, { useState } from 'react';
import { Paper, Button, Group, useMantineTheme, rem } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useClickOutside } from '@reactgets/hooks';

const code = `
import { useState } from 'react';
import { Paper, Button } from '@reactgets/core';
import { useClickOutside } from '@reactgets/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Group position="center">
          <Button onClick={() => setOpened(true)}>Open dropdown</Button>
        </Group>

        {opened && (
          <Paper
            ref={ref}
            shadow="sm"
            sx={{
              width: rem(300),
              height: rem(60),
              position: 'absolute',
              top: 0,
              left: `calc(50% - ${rem(150)})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </>
  );
}

export const useClickOutsideUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
