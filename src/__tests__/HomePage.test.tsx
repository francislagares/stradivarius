import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders home page component', () => {
  render(<HomePage />);
  const title = screen.getByText(/home page/i);
  expect(title).toBeInTheDocument();
});
