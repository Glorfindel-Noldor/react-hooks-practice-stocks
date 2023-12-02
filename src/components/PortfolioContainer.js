import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer() {
  const [buyStock, setBoughtStock] = useState(null);

  const handleBoughtStock = (stock)=>{
    setBoughtStock((buying)=> [stock, ...buying])
  }

  const handleSellStock = (stockId) => {

    setBoughtStock((prevStock) => prevStock.filter((stock) => stock.id !== stockId));
  };





  const boughtStock = buyStock.map((item) => (
    <div key={item.id}>
      <h5>{item.name}</h5>
      <p>{item.price}</p>
    </div>
  ));


  const portfolioStocks = boughtStock.map((item) => (
    <div key={item.id}>
      <Stock item={item} onSell={() => handleSellStock(item.id)} />
    </div>
  ));



  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
