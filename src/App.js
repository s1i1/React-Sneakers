import React from "react";
import { Routes, Route } from 'react-router-dom'
import axios from "axios";
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import PurchasesPage from './pages/PurchasesPage';
import Header from "./components/Header";
import Basket from "./components/Basket";
import setOverflow from "./setOverflow";
import calculateTotal from "./components/Basket/calculateTotal";

function App() {
  const [productData, setProductData] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [visibleBasket, setVisibleBasket] = React.useState(false);
  const [cardItems, setCardItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [tax, setTax] = React.useState(0);

  setOverflow(visibleBasket);

  React.useEffect(() => {
    async function getData() {
      let resp = await axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/items");
      setProductData(resp.data);
      setSearchItems(resp.data);
    }

    getData();
    axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket")
      .then(resp => setCardItems(resp.data));

    axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite")
      .then(resp => setFavoriteItems(resp.data));
  }, []);

  React.useEffect(() => {
    calculateTotal(cardItems, total, setTotal, tax, setTax);
  }, [cardItems])

  const handlerBasketClick = () => {
    setVisibleBasket((prev) => !prev);
  };

  const handlerClickDeleteCard = (path) => {
    cardItems.map((item, index) => {
      if (item.product.includes(path)) {
        axios.delete(`https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket/${item.id}`);
        setCardItems(cardItems.filter((arr, i) => cardItems[i] !== cardItems[index]));
      }
    });
  }

  const handlerClickDeleteFavorite = (path) => {
    favoriteItems.map((item, index) => {
      if (item.product.includes(path)) {
        axios.delete(`https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite/${item.id}`);
        setFavoriteItems(favoriteItems.filter((arr, i) => cardItems[i] !== cardItems[index]));
      }
    });
  }

  const handlerClickSearchDelete = () => {
    setSearchValue('');
    setSearchItems(productData);
  };

  const onAddToCart = (obj) => {
    setCardItems((prev) => [...prev, obj]);
    axios.post("https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket", obj);
  };

  const onAddToFavorite = (obj) => {
    setFavoriteItems((prev) => [...prev, obj]);
    axios.post("https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite", obj);
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
    setSearchItems(productData.filter(item => item.desc.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <div className="wrapper">
      {visibleBasket && <Basket
        total={total}
        setTotal={setTotal}
        tax={tax}
        setTax={setTax}
        items={cardItems}
        onClickCloseOverlay={handlerBasketClick}
        onClickDeleteCard={handlerClickDeleteCard}
      />}
      <header>
        <Header
          total={total}
          onClickBasket={handlerBasketClick}
        />
      </header>
      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={
              <HomePage
                handlerClickSearchDelete={handlerClickSearchDelete}
                onChangeSearch={onChangeSearch}
                searchValue={searchValue}
                cardItems={cardItems}
                productData={searchItems}
                favoriteItems={favoriteItems}
                onPlus={(obj) => onAddToCart(obj)}
                onDelete={handlerClickDeleteCard}
                onDeleteFavorite={handlerClickDeleteFavorite}
                onFavorite={(obj) => onAddToFavorite(obj)}
              />
            } />
            <Route path="/favorite" element={
              <FavoritePage
                favoriteItems={favoriteItems}
                productData={productData}
                onPlus={(obj) => onAddToCart(obj)}
                onDelete={handlerClickDeleteCard}
              />
            } />
            <Route path="/purchases" element={<PurchasesPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
