import React, { useEffect, useState } from "react";
import Stock from "./Stock";
import PortfolioContainer from "./PortfolioContainer";

function StockContainer() {

  const [stocks, setStock]=useState([])
  const [boughtStocks, setBoughtStocks] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then((res)=>(res.json()))
    .then((data)=>(setStock(data)))
    .catch((error)=>(console.log(error,'NOT FOUND')))    
  },[])

  const handleBuyStock = (buy)=> {
    setBoughtStocks([...boughtStocks, buy])
    
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock)=>(
        <Stock 
          key={stock.id} 
          stocks={stock}  
          onBuy={handleBuyStock}
        />
      ))}
      <PortfolioContainer
        receipt={boughtStocks}
      />
    </div>
  );
}

export default StockContainer;
