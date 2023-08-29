import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { Group, Button } from '@reactgets/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@reactgets/hooks';
import { Button } from '@reactgets/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
