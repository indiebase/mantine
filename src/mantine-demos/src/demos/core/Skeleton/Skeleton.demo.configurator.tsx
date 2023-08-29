import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Skeleton, SkeletonProps } from '@reactgets/core';

function Wrapper(props: Partial<SkeletonProps>) {
  return (
    <div>
      <Skeleton height={50} circle mb="xl" {...props} />
      <Skeleton height={8} radius="xl" {...props} />
      <Skeleton height={8} mt={6} radius="xl" {...props} />
      <Skeleton height={8} mt={6} width="70%" radius="xl" {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Skeleton } from '@reactgets/core';

function Demo() {
  return (
    <>
      <Skeleton${props} height={50} circle mb="xl" />
      <Skeleton${props} height={8} radius="xl" />
      <Skeleton${props} height={8} mt={6} radius="xl" />
      <Skeleton${props} height={8} mt={6} width="70%" radius="xl" />
    </>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'animate', type: 'boolean', initialValue: true, defaultValue: true }],
};
