import { fireEvent, render } from '@test';
import Button from './CommonButton';

describe('Component testing with testing-library', () => {
  it('should render button tag with given text', () => {
    const mockingText = 'this is button noting else.';
    const { container, getByText } = render(<Button>{mockingText}</Button>);
    expect(container).toMatchSnapshot();
    expect(getByText(mockingText)).toBeDefined();
  });

  it('should render any element as children properly', () => {
    const mockingComponent = (
      <div data-testid="child-component">
        <i>any</i> component
      </div>
    );
    const { container, getByTestId } = render(<Button>{mockingComponent}</Button>);
    expect(container).toMatchSnapshot();
    expect(getByTestId('child-component')).toBeDefined();
  });

  it('should render with correct given class name', () => {
    // Arrange
    const mockingClassName = 'zap-zap-class';

    // Act
    const { getByRole } = render(<Button className={mockingClassName}>test class button</Button>);

    // Assert
    expect(getByRole('button').classList.contains(mockingClassName)).toBeTruthy();
  });

  it('should be clickable', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<Button onClick={mockFn} />);

    const btn = getByRole('button');
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
