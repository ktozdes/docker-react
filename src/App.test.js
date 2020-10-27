import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World Chika/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders wow text', () => {
  render(<App />);
  const ddd = screen.getByText(/wow/i);
  expect(ddd).toBeInTheDocument();
});
