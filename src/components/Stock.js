import React from "react";

function Stock({item , setBoughtStock}) {
const { name, price } = item

// type and ticker 



function handleBuy(item){
  setBoughtStock(item)
}



  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
      <button  
        onClick={e => handleBuy(e)}
      > 
          <p className="card-text">{price}</p>
      </button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
