import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@reactgets/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
