import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({ receipt, sell }) {
  return (
    <>
      <h2>My Portfolio</h2>
      {!receipt
        ? null
        : receipt.map((t) => (
            <div className="card" key={t.id}>
              <div className="card-body">
                <h5 className="card-title">{t.name}</h5>
                <p className="card-text">{t.price}</p>
                <button onClick={() => sell(t)}>Sell</button>
              </div>
            </div>
          ))}
    </>
  );
}


export default PortfolioContainer;
