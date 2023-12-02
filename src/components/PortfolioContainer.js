import React,{useState} from "react";
import Stock from "./Stock";

function PortfolioContainer() {


  const [buyStock, setBoughtStock] = useState(null)

  const boughtStock = buyStock.map((item)=>(
    <>
      <h5>{item.name}</h5>
      <p>{item.price}</p>
    </>
  )) 
  






  return (
    <div>
      <h2>My Portfolio</h2>
      <Stock setBoughtStock={setBoughtStock}/>
      {
        boughtStock
      }
    </div>
  );
}

export default PortfolioContainer;
