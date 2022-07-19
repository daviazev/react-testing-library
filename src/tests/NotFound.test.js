import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('testa a page NotFound', () => {
  renderWithRouter(<NotFound />);

  const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

  const heading = screen.getByRole('heading', { name: /Page requested not found/i });
  expect(heading).toBeInTheDocument();
  const image = screen.getAllByRole('img')[1];
  expect(image).toHaveAttribute('src', url);
});
