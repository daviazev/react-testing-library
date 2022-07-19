import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

test('testa a page FavoritePokemons', () => {
  renderWithRouter(<FavoritePokemons />);

  const heading = screen.getByText(/No favorite pokemon found/i);
  expect(heading).toBeInTheDocument();
});
