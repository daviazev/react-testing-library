import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa o componente pokemon', () => {
  test('testa o h2 da página', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('heading', { name: /Encountered pokémons/i }))
      .toBeInTheDocument();
  });

  test('testa o botão Próximo Pokemon', () => {
    renderWithRouter(<App />);

    const button = screen.getAllByRole('button')[8];
    expect(button).toHaveTextContent(/Próximo pokémon/i);

    userEvent.click(button);
  });

  test('testa todos os botões que tratam do tipo dos polemons', () => {
    renderWithRouter(<App />);

    ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon']
      .forEach((type, index) => {
        const typeButton = screen.getAllByTestId('pokemon-type-button')[index];
        expect(typeButton).toHaveTextContent(type);
      });
  });

  test('testa somente o botão All', () => {
    renderWithRouter(<App />);

    const allButton = screen.getAllByRole('button')[0];
    expect(allButton).toHaveTextContent('All');

    userEvent.click(allButton);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
