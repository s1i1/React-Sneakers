import React from 'react';
import BasketCard from "./BasketCard";
import BasketTotal from "./BasketTotal";

const Basket = (props) => {
    return (
        <div
            style={{ display: 'none' }} className="content__basket basket">
            <div className="basket__overlay"></div>
            <div className="basket__container">
                <h3 className="basket__title">Корзина</h3>
                <div className="basket__cards selected__product">
                    {props.productData.map((item, index) => {
                        return (<BasketCard
                            key={index}
                            product={item.product}
                            desc={item.desc}
                            price={item.price}
                        />)
                    })}
                </div>
                <BasketTotal productData={props.productData} />
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
    )
}

export default Basket