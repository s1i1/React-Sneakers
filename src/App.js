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
  const [favoriteData, setFavoriteData] = React.useState([]);
  const [purchasesData, setPurchasesData] = React.useState([]);
  const [purchasesHistory, setPurchasesHistory] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [visibleBasket, setVisibleBasket] = React.useState(false);
  const [cardItems, setCardItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  setOverflow(visibleBasket);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        let resp = await axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/items");
        setProductData(resp.data);
        setSearchItems(resp.data);

        setIsLoading(false);
      } catch (err) {
        alert('Не удалось загрузить items')
      }
    }

    async function getFavoriteData() {
      try {
        let resp = await axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite");

        setFavoriteData(resp.data);
        setFavoriteItems(resp.data);
      } catch (err) {
        alert('Не удалось загрузить favorite')
      }
    }

    getData();
    getFavoriteData();

    axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket")
      .then(resp => setCardItems(resp.data));

    axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/purchases")
      .then(resp => setPurchasesHistory(resp.data));
  }, []);

  React.useEffect(() => {
    calculateTotal(cardItems, total, setTotal, tax, setTax);
  }, [cardItems])

  const handlerBasketClick = () => {
    setVisibleBasket((prev) => !prev);
  };

  const handlerClickDeleteCard = async (path) => {
    try {
      let { data } = await axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket");

      data.map((item, index) => {
        if (item.product.includes(path)) {
          axios.delete(`https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket/${item.id}`);
          setCardItems(cardItems.filter((arr, i) => cardItems[i] !== cardItems[index]));
        }
      });
    } catch (err) {
      alert('Не удалось получить basket')
    }
  }

  const handlerClickDeleteFavorite = async (path) => {
    try {
      let { data } = await axios.get("https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite");

      data.map((item, index) => {
        if (item.product.includes(path)) {
          axios.delete(`https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite/${item.id}`);

          setFavoriteItems(favoriteItems.filter((arr, i) => favoriteItems[i] !== favoriteItems[index]));

          setFavoriteData(favoriteData.filter((arr, i) => favoriteData[i] !== favoriteData[index]));
        }
      });
    } catch (err) {
      alert('Не удалось получить favorite')
    }
  }

  const handlerClickSearchDelete = () => {
    setSearchValue('');
    setSearchItems(productData);
  };

  const onAddToCart = (obj) => {
    try {
      setCardItems((prev) => [...prev, obj]);
      axios.post("https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket", obj);
    } catch (err) {
      alert('Не отправить obj в basket')
    }
  };

  const onAddToFavorite = (obj) => {
    try {
      setFavoriteItems((prev) => [...prev, obj]);
      setFavoriteData((prev) => [...prev, obj]);
      axios.post("https://63234cd3362b0d4e7de0f3ee.mockapi.io/favorite", obj);
    } catch (err) {
      alert('Не удалось отправить obj в favorite');
    }
  };

  const onPurchase = (obj) => {
    setPurchasesData((prev) => [...prev, ...obj]);
  };

  React.useEffect(() => {
    let jsonData = new Set(purchasesData.map(item => JSON.stringify(item)));
    let arrData = Array.from(jsonData).map(item => JSON.parse(item));

    if (arrData.length > 0) {
      setPurchasesHistory(arrData);

      arrData.forEach(item => {
        try {
          console.log('Отправляется obj в purchases');
          axios.post("https://63234cd3362b0d4e7de0f3ee.mockapi.io/purchases", item);
        } catch (err) {
          alert('purchases не отправлен')
        }
      });
    }
  }, [purchasesData]);

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
        onPurchase={(obj) => onPurchase(obj)}
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
                isLoading={isLoading}
              />
            } />
            <Route path="/favorite" element={
              <FavoritePage
                cardItems={cardItems}
                favoriteItems={favoriteItems}
                productData={favoriteData}
                onPlus={(obj) => onAddToCart(obj)}
                onDelete={handlerClickDeleteCard}
                onDeleteFavorite={handlerClickDeleteFavorite}
                onFavorite={(obj) => onAddToFavorite(obj)}
              />
            } />
            <Route path="/purchases" element={
              <PurchasesPage
                cardItems={cardItems}
                favoriteItems={favoriteItems}
                productData={purchasesHistory}
                onPlus={(obj) => onAddToCart(obj)}
                onDelete={handlerClickDeleteCard}
                onDeleteFavorite={handlerClickDeleteFavorite}
                onFavorite={(obj) => onAddToFavorite(obj)}
              />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
