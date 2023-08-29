import React from 'react';
import { Link } from 'gatsby';
import { rem } from '@reactgets/core';
import { MantineLogo, MantineLogoProps } from '@reactgets/ds';
import useStyles from './Logo.styles';

export function Logo(props: MantineLogoProps) {
  const { classes } = useStyles();

  return (
    <Link to="/" className={classes.logo} aria-label="Mantine">
      <MantineLogo size={rem(30)} {...props} />
    </Link>
  );
}
