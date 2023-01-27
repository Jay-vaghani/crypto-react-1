import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function CoinsTable() {
  const { currency, symbol } = CryptoState();

  const [coins, setCoins] = useState([]);
  const [lodging, setLodging] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLodging(true);

    const data = await fetch(CoinList(currency)).then(async (response) =>
      response.json()
    );

    setCoins(data);

    setLodging(false);
  };

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <>
      <div className="container ">
        <h2 className="display-5 text-center my-5">
          Cryptocurrency Prices by Market Cap
        </h2>

        <div className="form-floating mb-3  my-5">
          <input
            type="text"
            className="form-control bg-black bg-gradient text-warning shadow-none border-0 ps-3 fs-4"
            id="floatingInput"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="floatingInput" className="text-warning">
            Search
          </label>
        </div>
      </div>

      {lodging && <Loader />}

      <div style={{overflowX: "auto"}}>
        <table className="table table-hover text-center overflow-x-scroll container">
          <thead>
            <tr className="table-dark  ">
              <th className="table-dark bg-warning text-black p-3 fs-5">
                Coin
              </th>
              <th className="table-dark bg-warning text-black p-3 fs-5">
                Price
              </th>
              <th className="table-dark bg-warning text-black p-3 fs-5">
                24h Change
              </th>
              <th className="table-dark bg-warning text-black p-3 fs-5">
                Market Cap
              </th>
            </tr>
          </thead>

          <tbody>
            {handleSearch().map((row) => {
              const profit = row.price_change_percentage_24h > 0;

              return (
                <tr
                  style={{ cursor: "pointer" }}
                  className="table-dark"
                  key={row.id}
                  onClick={() => navigate(`/coins/${row.id}`)}
                >
                  <td className="table-dark bg-black text-warning p-3 fw-semibold">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        src={row.image}
                        style={{ width: "60px" }}
                        alt={row.name}
                      />
                      <div className="d-flex flex-column align-items-start ms-3">
                        <h4 className="mb-0">{row.name}</h4>
                        <h5 className="mb-0">{row.symbol}</h5>
                      </div>
                    </div>
                  </td>
                  <td className="table-dark bg-black text-warning p-3 fw-semibold">
                    {row.current_price} {symbol}
                  </td>
                  <td
                    className="table-dark bg-black p-3 fw-semibold"
                    style={{ color: profit ? "rgb(14, 203, 129)" : "red" }}
                  >
                    {row.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="table-dark bg-black text-warning p-3 fw-semibold">
                    {row.market_cap.toString()} {symbol}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CoinsTable;

{
  /*  */
}

{
  /* Loader Start */
}
