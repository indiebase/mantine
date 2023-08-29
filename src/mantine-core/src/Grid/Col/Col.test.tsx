import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { GridProvider } from '../Grid.context';
import { Col, ColProps } from './Col';

const defaultProps: ColProps = {
  span: 12,
};

const TestContainer = createContextContainer(Col, GridProvider, {
  value: {
    gutter: 'md',
    grow: false,
    columns: 12,
  },
});

describe('@reactgets/core/Col', () => {
  itThrowsContextError(Col, defaultProps, 'Grid component was not found in tree');
  itSupportsProviderVariant(TestContainer, defaultProps, 'Grid', 'col');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@reactgets/core/Col',
    providerName: 'GridCol',
  });
});
