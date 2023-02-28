import {render, screen} from '@testing-library/react';
import App from "./App";

test('renders player', () => {
    render(<App/>);
    const highlight = screen.getByText('This is a player');
    expect(highlight).toBeInTheDocument();
});
