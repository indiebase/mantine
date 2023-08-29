import { createStyles, rem, getSize } from '@reactgets/styles';

export default createStyles((theme, _params, { size }) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: `calc(${getSize({ size, sizes: theme.fontSizes })} - ${rem(2)})`,
  },
}));
