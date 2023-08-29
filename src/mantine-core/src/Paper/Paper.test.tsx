import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps = {};

describe('@reactgets/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsProviderVariant(Paper, defaultProps, 'Paper');
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@reactgets/core/Paper',
    refType: HTMLDivElement,
    providerName: 'Paper',
  });
});
