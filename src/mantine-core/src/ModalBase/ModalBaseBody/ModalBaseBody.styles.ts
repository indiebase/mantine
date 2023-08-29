import { createStyles, MantineNumberSize, getSize } from '@reactgets/styles';

interface ModalBaseBodyStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ModalBaseBodyStylesParams) => ({
  body: {
    padding: getSize({ size: padding, sizes: theme.spacing }),

    '&:not(:only-child)': {
      paddingTop: 0,
    },
  },
}));
