import { itSupportsClassName, itSupportsSx } from '@reactgets/tests';
import NotificationContainer from './NotificationContainer';

const defaultProps = {
  notification: { id: 'test', message: 'test-message' },
  onHide: () => {},
  autoClose: false,
  innerRef: undefined,
} as const;

describe('@reactgets/notifications/NotificationContainer', () => {
  itSupportsSx(NotificationContainer, defaultProps);
  itSupportsClassName(NotificationContainer, defaultProps);

  it('has correct displayName', () => {
    expect(NotificationContainer.displayName).toStrictEqual(
      '@reactgets/notifications/NotificationContainer'
    );
  });
});
