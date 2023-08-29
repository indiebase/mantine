import type { PinInputStylesNames } from '@reactgets/core';
import { Input } from './Input.styles-api';

export const PinInput: Record<PinInputStylesNames, string> = {
  root: 'Root element',
  ...Input,
};
