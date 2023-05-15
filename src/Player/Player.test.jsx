import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Player from './Player';
import { PLAYLIST } from '../utils/constants';

describe('Player', () => {
  test('should render player', () => {
    // Arrange
    render(<Player />);
    // Act
    // Assert
    expect(screen.getByText(PLAYLIST[1].title)).toBeInTheDocument();
  });
});
