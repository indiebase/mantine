import { MantineNumberSize } from '@reactgets/styles';
import { createSafeContext } from '@reactgets/utils';

export type ScrollAreaComponent = React.FC<any>;

interface ModalContext {
  yOffset: string | number;
  radius: MantineNumberSize;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
