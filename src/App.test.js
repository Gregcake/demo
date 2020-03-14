import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world link', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Hello, world!/i);
  expect(element).toBeInTheDocument();
});
