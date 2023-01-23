import React, { useEffect, useState } from "react";
import "./carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { NavLink } from "react-router-dom";

function Carousel() {
  const { currency, symbol } = CryptoState();

  const [tradingCoins, setTradingCoins] = useState([]);

  const fetchCoin = async () => {
    const data = await fetch(TrendingCoins(currency)).then(
      async (res) => await res.json()
    );

    setTradingCoins(data);
  };

  const items = tradingCoins.map((coins) => {
    let profit = coins.price_change_percentage_24h >= 0;

    return (
      <NavLink
        className="text-decoration-none text-white"
        to={`/coins/${coins.id}`}
      >
        <div
          key={coins.id}
          className="my-5 d-flex justify-content-center align-items-center flex-column"
        >
          <div className="coinImage mb-3">
            <img src={coins.image} alt="" />
          </div>
          <p className="mb-2">
            <span className="text-uppercase me-1">{coins.symbol}</span>
            <span
              className="ms-1"
              style={{
                color: profit ? "rgb(14, 203, 129)" : "red",
                fontWeight: 600,
              }}
            >
              {profit ? "+" : ""}
              {coins.price_change_percentage_24h}
            </span>
          </p>
          <h2 className="fs-4 fw-semibold mt-0">
            {Math.round(coins.current_price)} {symbol}
          </h2>
        </div>
      </NavLink>
    );
  });

  const responsive = {
    340: { items: 2 },
    550: { items: 3 },
    768: { items: 4 },
    1124: { items: 5 },
    1440: { items: 7 },
  };

  useEffect(() => {
    fetchCoin();
  }, [currency]);
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        infinite
        disableDotsControls
        touchTracking={false}
        disableButtonsControls
      />
    </div>
  );
}

export default Carousel;
