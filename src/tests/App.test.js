import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa o componente App', () => {
  beforeEach(() => renderWithRouter(<App />));

  test('testa o link da página Home', () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);
    const h2 = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    expect(h2).toBeDefined();
  });

  test('testa o link da página About', () => {
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    const h2 = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(h2).toBeInTheDocument();
  });

  test('testa o link da página Favorite Pokemons', () => {
    const favoritePokemonsLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoritePokemonsLink);
    const h2 = screen.getByRole('heading', { name: 'Favorite pokémons', level: 2 });
    expect(h2).toBeInTheDocument();
  });

  test('testa se ele vai pra página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/a-realidade-tende-a-ser-decepcionante');
    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
