function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header-block">
          <div className="logo-block">
            <img width={'40px'} height={'40px'} src="img/header/logo.png" alr="logo" />
            <div>
              <h3>REACT SNEAKERS</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <div className="profile-block">
            <ul>
              <li className="basket">
                <img width={'18px'} height={'18px'} src="/img/header/basket_icon.svg" alr="basket_icon" />
                <p>1205 руб.</p>
              </li>
              <li>
                <img width={'12px'} height={'19px'} src="/img/header/like_icon.svg" alr="like_icon" />
              </li>
              <li>
                <img width={'20px'} height={'20px'} src="/img/header/profile_icon.svg" alr="profile_icon" />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="content">
        <div className="content__top">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="content__search search">
            <div className="search__icon">
            <img width={'14px'} height={'14px'} src="/img/main/search/search.svg" alt="search" />
            </div>
          <input placeholder="Поиск..."/>
           </div>
          </div>
          <div className="cards">
            <div className="cards__item item">
              <button className="item__liked">
                <img src="img/main/cards/not_liked.png" alt="unlike" />
              </button>
              <div className="item__product">
                <img width={'133px'} height={'112px'} src="/img/main/cards/product1.jpg" alt="product" />
              </div>
              <p className="item__desc">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="item__price price">
              <div className="price__block">
              <p className="price__title">
                  Цена:
                </p>
                <strong className="price__value">
                  12 999 руб.
                </strong>
              </div>
              <button className="price__check">
                <img src="img/main/cards/not_checked.svg" alt="not_checked" />
              </button>
              </div>
            </div>
            <div className="cards__item item">
              <button className="item__liked">
                <img src="img/main/cards/not_liked.png" alt="unlike" />
              </button>
              <div className="item__product">
                <img width={'133px'} height={'112px'} src="/img/main/cards/product1.jpg" alt="product" />
              </div>
              <p className="item__desc">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="item__price price">
              <div className="price__block">
              <p className="price__title">
                  Цена:
                </p>
                <strong className="price__value">
                  12 999 руб.
                </strong>
              </div>
              <button className="price__check">
                <img src="img/main/cards/not_checked.svg" alt="not_checked" />
              </button>
              </div>
            </div>
            <div className="cards__item item">
              <button className="item__liked">
                <img src="img/main/cards/not_liked.png" alt="unlike" />
              </button>
              <div className="item__product">
                <img width={'133px'} height={'112px'} src="/img/main/cards/product1.jpg" alt="product" />
              </div>
              <p className="item__desc">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="item__price price">
              <div className="price__block">
              <p className="price__title">
                  Цена:
                </p>
                <strong className="price__value">
                  12 999 руб.
                </strong>
              </div>
              <button className="price__check">
                <img src="img/main/cards/not_checked.svg" alt="not_checked" />
              </button>
              </div>
            </div>
            <div className="cards__item item">
              <button className="item__liked">
                <img src="img/main/cards/not_liked.png" alt="unlike" />
              </button>
              <div className="item__product">
                <img width={'133px'} height={'112px'} src="/img/main/cards/product1.jpg" alt="product" />
              </div>
              <p className="item__desc">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="item__price price">
              <div className="price__block">
              <p className="price__title">
                  Цена:
                </p>
                <strong className="price__value">
                  12 999 руб.
                </strong>
              </div>
              <button className="price__check">
                <img src="img/main/cards/not_checked.svg" alt="not_checked" />
              </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
