import {render, screen} from '@testing-library/react';
import Player from './Player';

test('renders learn react link', () => {
    render(<Player/>);
    const highlight = screen.getByText('This is a player');
    expect(highlight).toBeInTheDocument();
});
