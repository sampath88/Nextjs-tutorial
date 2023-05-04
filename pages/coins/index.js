import Axios from "axios";
import coinStyles from "@/styles/Coins.module.css";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className={coinStyles.coinList}>
      {coinData.coins.map((coin) => {
        return (
          <div className={coinStyles.container} key={coin.id}>
            <h1 className={coinStyles.name}>{coin.name}</h1>
            <img className={coinStyles.icon} src={coin.icon} />
            <p className={coinStyles.price}>${coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0",
  );
  return {
    props: {
      coinData: res.data,
    },
  };
};

export default CoinList;
