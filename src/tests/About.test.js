import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

test('testa o componente About', () => {
  renderWithRouter(<About />);

  const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  const heading = screen.getByRole('heading', { name: 'About Pokédex' });
  const img = screen.getByRole('img');
  expect(heading).toBeInTheDocument();
  expect(img).toHaveAttribute('src', url);
});
