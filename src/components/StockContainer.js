import React, { useEffect, useState } from "react";
import Stock from "./Stock";
const API = 'http://localhost:3001/stocks'


function StockContainer() {
  const [intel, setIntel] = useState(null)//houses all stocks




  useEffect(()=>{
    fetch(API)
    .then((res)=>(res.json()))
    .then((data)=>setIntel(data))
    .catch(error => alert(`you have the following error: ${error}`))

  },[])

  const stockCard = intel.map((item)=>(
    <Stock key={item.id} item={item} />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stockCard}
    </div>
  );
}

export default StockContainer;
