import React from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import ContentTop from "./components/ContentTop";
import ContentCards from "./components/ContentCards";
import setOverflow from "./setOverflow";

function App() {
  const [productData, setProductData] = React.useState([]);
  const [visibleBasket, setVisibleBasket] = React.useState(false);
  const [cardItems, setCardItems] = React.useState([]);

  setOverflow(visibleBasket);

  React.useEffect(() => {
    fetch("https://63234cd3362b0d4e7de0f3ee.mockapi.io/items")
      .then(resp => resp.json())
      .then(data => setProductData(data));
  }, []);

  const handlerBasketClick = () => {
    setVisibleBasket((prev) => !prev);
  };

  const onAddToCart = (obj) => {
    setCardItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {visibleBasket && <Basket
        items={cardItems}
        onClickOverlay={handlerBasketClick}
      />}
      <header>
        <Header
          onClickBasket={handlerBasketClick}
        />
      </header>
      <main>
        <div className="content">
          <ContentTop />
          <ContentCards
            productData={productData}
            onPlus={(obj) => onAddToCart(obj)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
