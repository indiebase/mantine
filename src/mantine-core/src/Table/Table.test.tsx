import { itSupportsSystemProps, itSupportsProviderVariant } from '@reactgets/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@reactgets/core/Table', () => {
  itSupportsProviderVariant(Table, defaultProps, 'Table');
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@reactgets/core/Table',
    refType: HTMLTableElement,
    providerName: 'Table',
  });
});
