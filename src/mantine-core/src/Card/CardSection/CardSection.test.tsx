import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps = {};

describe('@reactgets/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsProviderVariant(CardSection, defaultProps, 'Card', 'cardSection');
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@reactgets/core/CardSection',
    refType: HTMLDivElement,
    providerName: 'CardSection',
  });
});
