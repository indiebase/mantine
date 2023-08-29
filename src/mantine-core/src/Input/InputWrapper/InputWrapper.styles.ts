import { createStyles } from '@reactgets/styles';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },
}));
