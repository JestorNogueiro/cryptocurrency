import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./Coins";

const Crypto = () => {
  const [input, setInput] = useState('');
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, [])

  const submit = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
  }


const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <>
      <div className="container">
        <form action="">
          <input
            className="coin-input"
            placeholder="search..."
            type="text"
            value={input}
            onChange={submit}
          />
        
        </form>
        
        {filterCoins.map((coin) => {
          return (
            <>
      
            <Coins
              key={coin.id}
              rank={coin.market_cap_rank}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              market_cap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.market_cap_change_percentage_24h}
              TotalVolume={coin.total_volume}
              />
              </>
          );
        })}
      </div>
    </>
  );
};

export default Crypto;
