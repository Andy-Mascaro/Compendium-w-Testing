export async function fetchQuotes(search) {
  const url = search
    ? `https://futuramaapi.herokuapp.com/api/quotes?search=${encodeURIComponent(search)}` 
    
    : 'http://futuramaapi.herokuapp.com/api/quotes/';
const resp = await fetch (url); 

    const info = await resp.json();
    return info;
  } 
  
