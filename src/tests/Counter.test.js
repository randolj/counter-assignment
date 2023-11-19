import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(incrementButton);

  expect(countDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(decrementButton);

  expect(countDisplay).toHaveTextContent('-1');
});
