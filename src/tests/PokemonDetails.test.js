import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
// import PokemonDetails from '../pages/PokemonDetails';
import App from '../App';

test('testa a page PokemonsDetails', () => {
  const { history } = renderWithRouter(<App />);

  const summary = 'This intelligent Pokémon roasts hard berries with';

  const src1 = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  const src2 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
  const src3 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

  history.push('/pokemons/25');
  expect(screen.getByText(/details/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Summary/i })).toBeInTheDocument();
  expect(screen.getByText(/Game Locations of Pikachu/i));
  expect(screen.getByText('Pokémon favoritado?')).toBeInTheDocument();

  expect(screen.getByText(/This intelligent Pokémon/i)).toBeInTheDocument();

  const img1 = screen.getAllByRole('img')[0];
  const img2 = screen.getAllByRole('img')[1];
  const img3 = screen.getAllByRole('img')[2];
  expect(img1).toHaveAttribute('src', src1);
  expect(img2).toHaveAttribute('src', src2);
  expect(img3).toHaveAttribute('src', src3);

  expect(screen.getAllByAltText(/Pikachu location/i));
});
