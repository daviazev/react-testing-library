import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa o componente Pokemon', () => {
  beforeEach(() => renderWithRouter(<App />));

  test('pega a imagem do pikachu', () => {
    const urlPikachuImg = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const pikachu = screen.getByRole('img');
    expect(pikachu).toHaveAttribute('src', urlPikachuImg);
  });

  test('pega o pokemon pelo seu tipo', () => {
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent('Electric');
  });

  test('pega a imagem do pikachu pelo seu atributo alt', () => {
    expect(screen.getByAltText('Pikachu sprite')).toBeInTheDocument();
  });

  test('encontra o link que leva à página de detalhes', () => {
    const link = screen.getByRole('link', { name: /More details/i });
    expect(link).toHaveAttribute('href', '/pokemons/25');
  });

  test('adicionando o pikachu como favorito', () => {
    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);

    const label = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(label);

    const starImage = screen.getAllByRole('img')[1];
    expect(starImage).toHaveAttribute('src', '/star-icon.svg');
    expect(starImage).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
