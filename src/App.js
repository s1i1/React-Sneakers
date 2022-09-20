import React from "react";
import axios from "axios"
import Header from "./components/Header";
import Basket from "./components/Basket";
import ContentTop from "./components/ContentTop";
import ContentCards from "./components/ContentCards";
import setOverflow from "./setOverflow";
import calculateTotal from "./components/Basket/calculateTotal";

function App() {
  const [productData, setProductData] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [visibleBasket, setVisibleBasket] = React.useState(false);
  const [cardItems, setCardItems] = React.useState([]);
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
  const handlerClickSearchDelete = () => {
    setSearchValue('');
    setSearchItems(productData);
  };

  const onAddToCart = (obj) => {
    setCardItems((prev) => [...prev, obj]);
    axios.post("https://63234cd3362b0d4e7de0f3ee.mockapi.io/basket", obj);
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
          <ContentTop
            handlerClickSearchDelete={handlerClickSearchDelete}
            onChangeSearch={onChangeSearch}
            searchValue={searchValue}
          />
          <ContentCards
            cardItems={cardItems}
            productData={searchItems}
            onPlus={(obj) => onAddToCart(obj)}
            onDelete={handlerClickDeleteCard}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
