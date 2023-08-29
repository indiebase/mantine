import React, { useState } from 'react';
import { useLogger } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { Button, Group } from '@reactgets/core';

const code = `
import { useState } from 'react';
import { useLogger } from '@reactgets/hooks';
import { Button } from '@reactgets/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

export const useLoggerDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
