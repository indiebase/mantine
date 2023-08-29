import { createSafeContext } from '@reactgets/utils';
import type { MantineNumberSize } from '@reactgets/styles';

interface GridContextValue {
  gutter: MantineNumberSize;
  gutterXs: MantineNumberSize;
  gutterSm: MantineNumberSize;
  gutterMd: MantineNumberSize;
  gutterLg: MantineNumberSize;
  gutterXl: MantineNumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createSafeContext<GridContextValue>(
  'Grid component was not found in tree'
);
