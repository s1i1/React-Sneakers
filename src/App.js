import React from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import ContentTop from "./components/ContentTop";
import ContentCards from "./components/ContentCards";

function App() {
  const [productData, setProductData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63234cd3362b0d4e7de0f3ee.mockapi.io/items")
      .then(resp => resp.json())
      .then(data => setProductData(data));
  }, []);


  return (
    <div className="wrapper">
      <Basket productData={productData} />
      <header>
        <Header />
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
