import React from 'react';
import { UnstyledButton, Tooltip, DefaultProps } from '@reactgets/core';
import { createPolymorphicComponent } from '@reactgets/utils';
import useStyles from './HeaderControl.styles';

export interface HeaderControlProps extends DefaultProps {
  tooltip: string;
  children: React.ReactNode;
}

function _HeaderControl({ tooltip, className, ...others }: HeaderControlProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx(classes.control, className)} {...others} />
    </Tooltip>
  );
}

export const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(
  _HeaderControl
);
