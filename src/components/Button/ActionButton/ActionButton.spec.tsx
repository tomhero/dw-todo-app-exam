import { fireEvent, render } from '@test';
import ActionButton, { ActionButtonProps } from './ActionButton';

describe('Component testing with testing-library', () => {
  const defaultProps: ActionButtonProps = {
    actions: [
      { action: 'foo', label: 'Foo' },
      { action: 'bar', label: 'Bar' },
    ],
    onClickAction: jest.fn(),
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render action button', () => {
    const mockingText = 'Foo';
    const hiddenClassName = 'dw-action-button__context-menu--hide';
    const { container, getByText, getByRole } = render(<ActionButton {...defaultProps} />);
    expect(container).toMatchSnapshot();
    expect(getByText(mockingText)).toBeDefined();
    expect(getByRole('list').classList.contains(hiddenClassName)).toBeTruthy();
  });

  it('can show context menu', () => {
    // Arrange
    const hiddenClassName = 'dw-action-button__context-menu--hide';

    // Act
    const { getByRole } = render(<ActionButton {...defaultProps} />);
    const btn = getByRole('button');
    fireEvent.click(btn);

    // Assert
    expect(getByRole('list').classList.contains(hiddenClassName)).toBeFalsy();
  });

  it('can select menu item', () => {
    // Arrange
    const hiddenClassName = 'dw-action-button__context-menu--hide';
    const mockSelectFn = jest.fn();
    const targetItem = 'bar';

    // Act
    const { getByRole } = render(<ActionButton {...defaultProps} onClickAction={mockSelectFn} />);
    const listItem = getByRole('list').getElementsByTagName('li')[1];
    fireEvent.click(listItem);

    // Assert
    expect(mockSelectFn).toHaveBeenCalledTimes(1);
    expect(mockSelectFn).toHaveBeenCalledWith(targetItem);
    expect(getByRole('list').classList.contains(hiddenClassName)).toBeTruthy();
  });

  it('should close context menu when blur event fired', () => {
    // Arrange
    const hiddenClassName = 'dw-action-button__context-menu--hide';

    // Act
    const { container, getByRole } = render(<ActionButton {...defaultProps} />);
    fireEvent.blur(container);

    // Assert
    expect(getByRole('list').classList.contains(hiddenClassName)).toBeTruthy();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
