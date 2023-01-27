import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";

const CoinsPage = () => {
  const [loader, setLoader] = useState(false);

  const [coin, setCoin] = useState();

  const regex = /(<([^>]+)>)/gi;

  const { symbol, currency } = CryptoState();

  const { id } = useParams();

  const fetchCoinInfo = async () => {
    const data = await fetch(SingleCoin(id)).then(async (res) => res.json());

    setCoin(data);
  };

  console.log(currency);

  useEffect(() => {
    fetchCoinInfo();
  }, [currency]);

  console.log(coin);

  return (
    <>
      <div>
        {coin && (
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 my-1" style={{borderRight: "1px solid grey"}}>
                <div className="my-4">
                  <div className="image-container">
                    <img
                      src={coin.image.large}
                      className="img-fluid d-block mb-3 mx-auto mt-5"
                      alt={coin.name}
                    />
                  </div>
                  <h2 className="text-center display-5 fw-bold">{coin.name}</h2>
                  <p
                    className="text-white text-wrap"
                    style={{ textAlign: "justify" }}
                  >
                    {coin.description.en.replace(regex, "").split(". ")[0] +
                      coin.description.en.replace(regex, "").split(". ")[1] +
                      coin.description.en
                        .replace(regex, "")
                        .split(". ")[3]}{" "}
                    .
                  </p>
                  <h3 className="fw-bold">Rank : {coin.market_cap_rank}</h3>
                  {currency === "INR" ? (
                    <h3 className="fw-bold">
                      Current Price: : {coin.market_data.current_price.inr}
                    </h3>
                  ) : (
                    <h3 className="fw-bold">
                      Current Price : {coin.market_data.current_price.usd}
                    </h3>
                  )}

                  {currency === "INR" ? (
                    <h3 className="fw-bold">
                      Market Cap :{" "}
                      {coin.market_data.market_cap.inr.toString().slice(0, -6)} M
                    </h3>
                  ) : (
                    <h3 className="fw-bold">
                      Market Cap :{" "}
                      {coin.market_data.market_cap.usd.toString().slice(0, -6)} M
                    </h3>
                  )}
                </div>
              </div>
              <div className="col-lg-8">
                <CoinInfo />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoinsPage;
