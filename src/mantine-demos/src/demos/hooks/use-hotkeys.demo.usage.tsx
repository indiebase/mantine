import React, { useState } from 'react';
import { getHotkeyHandler, useHotkeys } from '@reactgets/hooks';
import { notifications } from '@reactgets/notifications';
import { MantineDemo } from '@reactgets/ds';
import { TextInput } from '@reactgets/core';

const code = `
import { useState } from 'react';
import { getHotkeyHandler } from '@reactgets/hooks';
import { notifications } from '@reactgets/notifications';
import { TextInput } from '@reactgets/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () => notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`;

function Demo() {
  useHotkeys([
    [
      'alt+mod+shift+X',
      () => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      },
    ],
  ]);

  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () =>
    notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}

export const useHotkeysDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
