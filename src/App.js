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
              <li className="basket__icon">
                <img width={'18px'} height={'18px'} src="/img/header/basket_icon.svg" alr="basket_icon" />
                <p>1205 руб.</p>
              </li>
              <li>
                <img width={'21px'} height={'19px'} src="/img/header/like_icon.svg" alr="like_icon" />
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
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="content__cards cards">
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
          <div style={{ display: 'none' }} className="content__basket basket">
            <div className="basket__overlay"></div>
            <div className="basket__container">
              <h3 className="basket__title">Корзина</h3>
              <div className="basket__cards selected__product">
                <div className="selected__product_item">
                  <div className="selected__product_image">
                    <img src="/img/main/basket/product.jpg" alt="product" />
                  </div>
                  <div className="selected__product_desc">
                    <div className="selected__product_container">
                      <div className="selected__product_title">
                        Мужские Кроссовки Nike Air Max 270
                      </div>
                      <strong className="selected__product_price">
                        12 999 руб.
                      </strong>
                    </div>
                    <button className="selected__product_delete">
                      <img src="/img/main/basket/delete_button.svg" alt="delete_button" />
                    </button>
                  </div>
                </div>
                <div className="selected__product_item">
                  <div className="selected__product_image">
                    <img src="/img/main/basket/product.jpg" alt="product" />
                  </div>
                  <div className="selected__product_desc">
                    <div className="selected__product_container">
                      <div className="selected__product_title">
                        Мужские Кроссовки Nike Air Max 270
                      </div>
                      <strong className="selected__product_price">
                        12 999 руб.
                      </strong>
                    </div>
                    <button className="selected__product_delete">
                      <img src="/img/main/basket/delete_button.svg" alt="delete_button" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="basket__total total">
                <div className="total__item">
                  <p className="total__item_text">Итого: </p>
                  <div className="total__item_line">
                    <span></span>
                  </div>
                  <strong className="total__item_cost">21 498 руб.</strong>
                </div>
                <div className="total__item">
                  <p className="total__item_text">Налог 5%: </p>
                  <div className="total__item_line">
                    <span></span>
                  </div>
                  <strong className="total__item_cost">1074 руб. </strong>
                </div>
              </div>
              <div className="basket__button">
                <div className="basket__button_text">
                  Оформить заказ
                </div>
                <div className="basket__button_image">
                  <img src="img/main/basket/arrow.svg" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
