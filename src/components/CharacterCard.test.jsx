import { screen, render } from '@testing-library/react';
import CharacterCard from './CharacterCard';




const quote = {
    character: "Fry",
    quote: 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.'
}

describe ('App', () =>  {
    it('Fry Quote', () => {
        render(<CharacterCard quote={quote} />)
    const saying = screen.getByText('Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.');
    expect(saying).toBeInTheDocument();
    screen.debug();
} )    
})

// screen.getByText('Fry');
//     screen.getByText( 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.');
//     const name = screen.getByText('Fry');
//     expect(name).toBeInTheDocument();
//     screen.debug();