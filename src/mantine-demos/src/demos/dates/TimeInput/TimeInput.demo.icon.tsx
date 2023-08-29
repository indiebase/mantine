import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@reactgets/dates';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@reactgets/dates';

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
