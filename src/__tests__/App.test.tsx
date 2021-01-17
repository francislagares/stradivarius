import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders component without crashing', () => {
  render(<App />);
});
