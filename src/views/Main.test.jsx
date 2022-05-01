import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe('Main', () => {
  it('Bender Quote', async () => {
    render(<Main />);
    
    screen.getByText('...loading');
    

    const preset = await screen.findByPlaceholderText('search');
    userEvent.type(preset, 'I hate the people that love me, and they hate me.');
    
    const button = screen.getByRole('button');
    userEvent.click(button);

    const name = await screen.findByText('I hate the people that love me, and they hate me.');
    expect(name).toBeInTheDocument();
    
    screen.debug();
  });
});

