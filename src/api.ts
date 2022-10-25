const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then(response => {
    return response.json();
  });
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then(response => {
    return response.json();
  });
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => {
    return response.json();
  });
}

export function fetchCoinHistory(coinId: string) {
  // 1주일 데이터 가져오기
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7;

  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`,
  ).then(response => {
    return response.json();
  });
}
