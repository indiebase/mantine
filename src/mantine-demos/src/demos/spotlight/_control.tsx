import React from 'react';
import { Button, Group } from '@reactgets/core';
import { useSpotlight } from '@reactgets/spotlight';

export function SpotlightControl({ buttonLabel }: { buttonLabel?: string }) {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>{buttonLabel || 'Open spotlight'}</Button>
    </Group>
  );
}
