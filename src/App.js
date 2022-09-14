import Header from "./components/Header";
import Basket from "./components/Basket";
import ContentTop from "./components/ContentTop";
import ContentCards from "./components/ContentCards";

const productData = [
  {
    product: "/img/main/cards/product.jpg",
    desc: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    product: "/img/main/cards/product2.jpg",
    desc: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999",
  },
  {
    product: "/img/main/cards/product3.jpg",
    desc: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499",
  },
  {
    product: "/img/main/cards/product3.jpg",
    desc: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499",
  },
  {
    product: "/img/main/cards/product3.jpg",
    desc: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499",
  },
];


function App() {
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
