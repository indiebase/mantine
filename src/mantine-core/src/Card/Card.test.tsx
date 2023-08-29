import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { Card, CardProps } from './Card';
import { CardSection } from './CardSection/CardSection';

const defaultProps: CardProps = {
  children: 'test-card',
};

describe('@reactgets/core/Card', () => {
  itRendersChildren(Card, defaultProps);
  itIsPolymorphic(Card, defaultProps);
  itSupportsProviderVariant(Card, defaultProps, 'Card');
  itSupportsSystemProps({
    component: Card,
    props: defaultProps,
    displayName: '@reactgets/core/Card',
    refType: HTMLDivElement,
    providerName: 'Card',
  });

  it('exposes CardSection as Card.Section', () => {
    expect(Card.Section).toBe(CardSection);
  });
});
