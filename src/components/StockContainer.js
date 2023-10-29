import React, { useEffect, useState } from "react";
import Stock from "./Stock";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function StockContainer() {
  const [stocks, setStock] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);

  const [sortType, setSortType] = useState(null);
  const [filterType, setFilterType] = useState(null);






  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((res) => res.json())
      .then((data) => setStock(data))
      .catch((error) => console.log(error, 'NOT FOUND'));
  }, []);

  function handleBuyStock(buy) {
    const newPortfolioStocks = stocks.filter((stock) => stock.id !== buy.id);
    setBoughtStocks([...boughtStocks, buy]);
    setStock(newPortfolioStocks);
  }












  // Sort stocks based on the selected sortType
  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortType === "Alphabetically") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "Price") {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  // Filter stocks based on the selected filterType
  const filteredStocks = filterType
    ? sortedStocks.filter((stock) => stock.type === filterType)
    : sortedStocks;


  return (
    <div>
      <h2>Stocks</h2>
      <SearchBar
        onSortChange={(sort) => setSortType(sort)}
        onFilterChange={(filter) => setFilterType(filter)}
      />





      {stocks.map((stock) => (
        <Stock
          stocks={stock}
          onBuy={handleBuyStock}
          key={stock.id}
        />
      ))}
      <PortfolioContainer
        receipt={boughtStocks}
      />
    </div>
  );
}


export default StockContainer;
