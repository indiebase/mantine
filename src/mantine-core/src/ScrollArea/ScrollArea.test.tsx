import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@reactgets/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@reactgets/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsProviderVariant(ScrollArea, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@reactgets/core/ScrollArea',
    refType: HTMLDivElement,
    providerName: 'ScrollArea',
  });
});

describe('@reactgets/core/ScrollArea.Autosize', () => {
  itRendersChildren(ScrollArea.Autosize, defaultProps);
  itSupportsProviderVariant(ScrollArea.Autosize, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@reactgets/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  });
});
