import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@reactgets/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@reactgets/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsProviderVariant(Title, defaultProps, 'Title');
  itSupportsProviderSize(Title, defaultProps, 'Title');
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@reactgets/core/Title',
    refType: HTMLHeadingElement,
    providerName: 'Title',
  });
});
