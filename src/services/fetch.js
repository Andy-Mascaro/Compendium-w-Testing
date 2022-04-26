export async function fetchQuotes() {
    const resp = await fetch ('https://futuramaapi.herokuapp.com/api/quotes/');
    const info = await resp.json();
    return info;
  } 
  
