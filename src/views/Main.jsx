import { useEffect, useState} from 'react';
import Search from '../components/Search';
import { fetchQuotes } from '../services/fetch';

export default function Main() {
const [quotes, setQuotes] = useState([]);
const [loading, setLoading] = useState([true]);
const [search, setSearch] = useState('');
 
  useEffect(() => {
    const pullQuotes = async () => {
    const info = await fetchQuotes();
    setQuotes(info);
    setLoading();
    };
    
    pullQuotes();
   
},[]);

if (loading) return <div className='loader'>...loading</div>;

const searchQuotes = async () => {
    const data = await fetchQuotes(search);
    setQuotes(data);
    
};

return (

    
<>
<div>
    <Search
    callback ={searchQuotes}
    search = {search}
    setSearch = {setSearch} />
</div>
<h3>Character Quotes</h3>

{quotes.map((quote) => (
    <div key={quote.quote}>
     <h4>{quote.character}</h4>
     <h5>{quote.quote}</h5>
    </div>
))}

</>

);
}
