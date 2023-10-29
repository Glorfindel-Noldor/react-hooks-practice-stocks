import React from "react";

function Stock({ stocks, onBuy }) {
  const purchase = () => {
    onBuy(stocks);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stocks.name}</h5>
          <p className="card-text">{stocks.price}</p>
          <button onClick={purchase}>Buy</button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
