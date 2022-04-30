// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';

//  const Fry = {
//      character: Fry,
//      quote: 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.'
//  }
// describe ('App', () => {
// it('testing search', async () => {
//     render(<App />)
//     // const resp = screen.getByPlaceholderText('search');
//     // userEvent.type(resp, 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.');
//     // const click = screen.getByRole('button')
//     // userEvent.click(click);
//     const fry = await screen.findByText('Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.')
//     expect(fry).toBeInTheDocument();
//     screen.debug();
// } )    
// })


import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe('Main', () => {
  it('Should pass 10 per page test', async () => {
    render(<Main />);

    // screen.getByText(/loading, please wait./i);

    // waitForElementToBeRemoved(loadState);
    // await waitForElementToBeRemoved(() => getByText(loadState));

    // screen.debug();
    // await screen.findAllByAltText('Image of a pokemon');

    // const number = await screen.findAllByRole('article');
    // expect(number.length).toBe(10);

    const preset = screen.getByPlaceholderText('search');
    userEvent.type(preset, 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const name = await screen.findByText('Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.');
    expect(name).toBeInTheDocument();
  });
});

