import React from 'react';

export default function Search({ search, callback, setSearch }) {
  
  return (
    <div>
      <input placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={callback}>Search</button>
    </div>
  );
}
