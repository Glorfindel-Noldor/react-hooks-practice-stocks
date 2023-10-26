import React from "react";
import Stock from "./Stock";

function PortfolioContainer({receipt}) {

  const displayReceipt = ()=> {

    <Stock  receipt={receipt}/>


  }
  
















  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        displayReceipt
      }
    </div>
  );
}

export default PortfolioContainer;