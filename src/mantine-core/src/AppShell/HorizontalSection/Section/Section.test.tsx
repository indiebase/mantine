import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@reactgets/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps = {
  children: 'test-section',
};

describe('@reactgets/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);
  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@reactgets/core/Section',
    refType: HTMLDivElement,
  });
});
