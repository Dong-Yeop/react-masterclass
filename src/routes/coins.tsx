import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 36px;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: #000;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in;
    display: flex;
    padding: 20px;
    align-items: center;
    font-weight: 600;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const CoinIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Loader = styled.p`
  text-align: center;
`;
const ThemeBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: none;
  background: none;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  font-size: 30px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);

  const { isLoading, data } = useQuery<ICoin[]>(['allCoins'], fetchCoins);

  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <Container>
      <Header>
        <Title>Coin List</Title>
        <ThemeBtn onClick={toggleDarkAtom}>&#9786;</ThemeBtn>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map(coin => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <CoinIcon
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.symbol}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
