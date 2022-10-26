import { useQuery } from 'react-query';
import { fetchCoinTickers } from '../api';
import styled from 'styled-components';

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
`;
const BoxItem = styled.li`
  width: 49%;

  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 12px 20px;
  text-align: center;
  :first-child {
    padding: 20px;
    flex-basis: 100%;
    font-size: 20px;
    span {
      width: auto;
      font-size: 20px;
    }
    strong {
      width: auto;
    }
  }
  strong {
    display: block;
    margin-bottom: 4px;
  }
  span {
    font-size: 24px;
  }
  span.up {
    color: #f75457;
    font-weight: 600;
  }
  span.up::before {
    content: '+';
  }
  span.down {
    color: #4386f9;
    font-weight: 600;
  }
`;

interface PriceProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(['price', coinId], () =>
    fetchCoinTickers(coinId),
  );

  return (
    <>
      {isLoading ? (
        'Loading Chart...'
      ) : (
        <ListBox>
          <BoxItem>
            <strong>PRICE : </strong>
            <span>${data?.quotes.USD.price}</span>
          </BoxItem>
          <BoxItem>
            <strong>PRICE CHANGE (15M)</strong>
            {data && (
              <span
                className={`${
                  data?.quotes.USD.percent_change_15m > 0 ? 'up' : 'down'
                }`}
              >
                {data?.quotes.USD.percent_change_15m}%
              </span>
            )}
          </BoxItem>
          <BoxItem>
            <strong>PRICE CHANGE (30M)</strong>
            <span
              className={`${
                data && data?.quotes.USD.percent_change_30m > 0 ? 'up' : 'down'
              }`}
            >
              {data?.quotes.USD.percent_change_30m}%
            </span>
          </BoxItem>
          <BoxItem>
            <strong>PRICE CHANGE (1H)</strong>
            <span
              className={`${
                data && data?.quotes.USD.percent_change_1h > 0 ? 'up' : 'down'
              }`}
            >
              {data?.quotes.USD.percent_change_1h}%
            </span>
          </BoxItem>
          <BoxItem>
            <strong>PRICE CHANGE (6H)</strong>
            <span
              className={`${
                data && data?.quotes.USD.percent_change_6h > 0 ? 'up' : 'down'
              }`}
            >
              {data?.quotes.USD.percent_change_6h}%
            </span>
          </BoxItem>
          <BoxItem>
            <strong>PRICE CHANGE (12H)</strong>
            <span
              className={`${
                data && data?.quotes.USD.percent_change_12h > 0 ? 'up' : 'down'
              }`}
            >
              {data?.quotes.USD.percent_change_12h}%
            </span>
          </BoxItem>
          <BoxItem>
            <strong>PRICE CHANGE (24H)</strong>
            <span
              className={`${
                data && data?.quotes.USD.percent_change_24h > 0 ? 'up' : 'down'
              }`}
            >
              {data?.quotes.USD.percent_change_24h}%
            </span>
          </BoxItem>
        </ListBox>
      )}
    </>
  );
}

export default Price;
