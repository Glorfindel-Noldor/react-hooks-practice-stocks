import React from "react";

function Stock({ item, onBuy , onSell}) {
const { id ,name, price } = item

// type and ticker 




  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
      <button  
        onClick={()=> onBuy(item)}
      > 
          <p className="card-text">{price}</p>
      </button>
      <button
        onClick={() => onSell(id)}
      >sell</button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
