import { useEffect, useState} from 'react';
import CharacterCard from '../components/CharacterCard';
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
    setLoading(false);
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
<CharacterCard
quote = {quote} />
))}

</>

);
}
