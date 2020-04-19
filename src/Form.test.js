import React from 'react';
import { render } from '@testing-library/react';
import Mailing from './Form';

test('renders learn react link', () => {
  const { getByText } = render(<Form/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
