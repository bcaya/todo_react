import React from 'react'; 

const List = ({ cards, flashCardClick}) => (
  <div>
    
      <ul>
        {cards.map ( card => 
        < key={card.id}>{card.question}</li>)}
      </ul>
  </div>
)

export default List; 