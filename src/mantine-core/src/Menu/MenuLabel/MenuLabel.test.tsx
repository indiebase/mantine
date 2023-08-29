import { itSupportsSystemProps, itRendersChildren, createContextContainer } from '@reactgets/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import { Menu } from '../Menu';

const defaultProps: MenuLabelProps = {};

const TestContainer = createContextContainer<any>(MenuLabel, Menu, { opened: true });

describe('@reactgets/core/MenuLabel', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/MenuLabel',
    providerName: 'MenuLabel',
  });
});
