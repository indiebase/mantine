import React, { useState } from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@reactgets/core';
import { ${name} } from '@reactgets/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <${name} type="range" allowSingleDateInRange value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <Group position="center">
        <Component type="range" allowSingleDateInRange value={value} onChange={setValue} />
      </Group>
    );
  };
}

export function getPickerSingleRangeDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@reactgets/dates/', '')),
    component: getDemo(Component),
  };
}
