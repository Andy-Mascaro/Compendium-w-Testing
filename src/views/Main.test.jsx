import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe ('Main', () => {
it('testing search', async () => {
    render(<Main />)
    screen.debug();
    const resp = screen.getByPlaceholderText('search');
    userEvent.type(resp, 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.');
    const click = screen.getByRole('button')
    userEvent.click(click);
    const fry = await screen.findByText('Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.')
    expect(fry).toBeInTheDocument();
} )    
})