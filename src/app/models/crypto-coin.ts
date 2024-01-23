export interface DataCoinRanking {
  status: string;
  data: {
    stats: DataStats;
    coins: DataCryptoCoin[];
  };
}

interface DataStats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

interface DataCryptoCoin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: number;
  rank: number;
  sparkline: [];
  lowVolume: boolean;
  coinrankingUrl: string;
  '24hVolume': string;
  btcPrice: string;
}
