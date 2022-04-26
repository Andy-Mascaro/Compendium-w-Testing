import { useEffect, useState} from 'react';
import { fetchQuotes } from '../services/fetch';

export default function Main() {
const [quotes, setQuotes] = useState([]);
const [loading, setLoading] = useState([]);
 
  useEffect(() => {
    const pullQuotes = async () => {
    const info = await fetchQuotes();
    setQuotes(info);
    
    };
    
    pullQuotes();
},[]);
  
return (
<>
<h3>Character Quotes</h3>

{quotes.map((quote) => (
    <div key={quote.id}>
     <h4>{quote.character}</h4>
     <h4>{quote.quote}</h4>
    </div>
))}

</>

);
}
