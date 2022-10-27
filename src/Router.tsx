import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './routes/coins';
import Coin from './routes/coin';

// interface IRouterProps {}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
