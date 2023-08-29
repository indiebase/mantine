import { createStyles, MantineNumberSize, getSize } from '@reactgets/styles';

interface AvatarGroupStylesParams {
  spacing: MantineNumberSize;
}

export default createStyles((theme, { spacing }: AvatarGroupStylesParams) => ({
  root: {
    display: 'flex',
    paddingLeft: getSize({ size: spacing, sizes: theme.spacing }),
  },
}));
