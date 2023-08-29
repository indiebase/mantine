import { itSupportsSystemProps, createContextContainer } from '@reactgets/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';
import { Menu } from '../Menu';

const defaultProps: MenuDividerProps = {};

const TestContainer = createContextContainer<any>(MenuDivider, Menu, { opened: true });

describe('@reactgets/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/MenuDivider',
    providerName: 'MenuDivider',
  });
});
