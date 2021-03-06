import React from "react";
import './coins.css'
const Coins = ({name,image,symbol,price,TotalVolume,priceChange,market_cap,rank}) => {
  return (
    <div className="container">
   
      <div className="row">
        <div className="coins">
          <>{rank}</> 
          <img src={image} alt="not Found" />{" "}
        </div>
        <h1>{name}</h1>
        <p className="symbol">{symbol}</p>
      <div className="price-volume">
        <p className="price">
        {'\u20B9'} 
          {price}</p>
        <p className="volume">{'\u20B9'}{TotalVolume}</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) :(

         <p className="coin-percent green" >{priceChange.toFixed(2)}%</p>
        )  }
        <p className="marketCap">
         {market_cap}
        </p>
      </div>
          </div>
      <hr className='line'/>
    </div>
  );
};

export default Coins;
