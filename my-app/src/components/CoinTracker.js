import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMymoney] = useState("");
  const [checkCost, setCheckcost] = useState(0.00026);
  //   const [getMoney, setGetmoney] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((Json) => {
        setCoins(Json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => setMymoney(event.target.value);
  //   useEffect(() => {
  //     setMymoney();
  //   }, [myMoney]);
  return (
    <div>
      <input
        onChange={onChange}
        value={myMoney}
        placeholder="your dollar"
        type="number"
      ></input>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>로딩중..</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <h1>코인:{myMoney * checkCost}</h1>
      {/* <h2>
        {coins.map((coin, index) => (
          <option key={index}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </h2> */}
    </div>
  );
}

export default CoinTracker;
