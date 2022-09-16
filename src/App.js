import React from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import ContentTop from "./components/ContentTop";
import ContentCards from "./components/ContentCards";
import setOverflow from "./setOverflow";

function App() {
  const [productData, setProductData] = React.useState([]);
  const [visibleBasket, setVisibleBasket] = React.useState(false);

  setOverflow(visibleBasket);

  React.useEffect(() => {
    fetch("https://63234cd3362b0d4e7de0f3ee.mockapi.io/items")
      .then(resp => resp.json())
      .then(data => setProductData(data));
  }, []);

  const handlerBasketClick = () => {
    setVisibleBasket((prev) => !prev);
  };

  return (
    <div className="wrapper">
      {visibleBasket && <Basket
        productData={productData}
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
          <ContentCards productData={productData} />
        </div>
      </main>
    </div>
  );
}

export default App;
