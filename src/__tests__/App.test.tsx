import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders component without crashing', () => {
  render(<App />);
  const title = screen.getByText(/home page/i);
  expect(title).toBeInTheDocument();
});
