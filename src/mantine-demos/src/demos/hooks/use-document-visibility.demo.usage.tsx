import React from 'react';
import { Text } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useDocumentTitle, useDocumentVisibility } from '@reactgets/hooks';

const code = `
import { Text } from '@reactgets/core';
import { useDocumentTitle, useDocumentVisibility } from '@reactgets/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
