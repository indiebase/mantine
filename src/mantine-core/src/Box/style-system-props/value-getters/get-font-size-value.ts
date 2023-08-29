import { MantineTheme, getSize } from '@reactgets/styles';

export function getFontSizeValue(size: any, theme: MantineTheme) {
  return getSize({ size, sizes: theme.fontSizes });
}
