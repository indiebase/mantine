import React, { useState } from 'react';
import { Button, Text, Group } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { randomId, useTimeout } from '@reactgets/hooks';

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@reactgets/core';
import { randomId, useTimeout } from '@reactgets/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
