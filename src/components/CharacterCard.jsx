import React from 'react'

export default function CharacterCard({ quote }) {
  return (
    <article key={quote.quote}>

    <div> 
         <h4>{quote.character}</h4>
         <h5>{quote.quote}</h5>
        </div>
        </article>
   
  );
}







