import { render, screen } from '@testing-library/react';
import Home from './Home';
import { renderWithRouter } from '../../../tests/utils'

vi.mock('hooks/useQuestions', () => {
  return { 
    default: () => ({
      totalRounds: 6,
      selectItem: vi.fn(),
    })
  }
})

test('renders learn react link', () => {
  renderWithRouter(<Home />);
  const linkElement = screen.getByText(/feeling lucky/i);
  expect(linkElement).toBeInTheDocument();
});
