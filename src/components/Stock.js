import React  from "react";


function Stock({  stock  }) {


  return (
    <div>  
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">name: {stock.name}</h5>
            <p className="card-text">Stock Price: {stock.price}</p>
          </div>
        </div>
 
    </div>
  );
}
export default Stock;
 