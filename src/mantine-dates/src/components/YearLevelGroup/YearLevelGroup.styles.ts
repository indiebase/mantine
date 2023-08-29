import { createStyles, getSize } from '@reactgets/core';

export default createStyles((theme, _, { size }) => ({
  yearLevelGroup: {
    display: 'flex',

    '& [data-year-level]:not(:last-of-type)': {
      marginRight: getSize({ size, sizes: theme.spacing }),
    },
  },
}));
