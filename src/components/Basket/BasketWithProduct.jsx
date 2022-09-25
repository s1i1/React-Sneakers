import React from 'react';
import AppContext from '../../AppContext';
import BasketCard from "./BasketCard";
import BasketTotal from "./BasketTotal";
import styles from './Basket.module.scss';

const BasketWithProduct = ({ onClickDeleteCard, onPurchase, }) => {

    const { cardItems } = React.useContext(AppContext);

    const handlerPurchase = () => {
        let obj = [...cardItems].map(item => {
            let product = item.product;
            let desc = item.desc;
            let price = item.price;

            return { product, desc, price }
        });
        onPurchase(obj);
    };

    return (
        <>
            <div className={styles.basket__cards}>
                {cardItems.map((item) => {
                    return (
                        <BasketCard
                            key={item.product}
                            product={item.product}
                            desc={item.desc}
                            price={item.price}
                            onClickDeleteCard={onClickDeleteCard}
                        />)
                })}
            </div>
            <BasketTotal />

            <button
                className={styles.basket__button}
                onClick={handlerPurchase}
            >
                <div className={styles.basket__button_text}>
                    Оформить заказ
                </div>
                <div className={styles.basket__button_image}>
                    <img src="img/main/basket/arrow.svg" alt="arrow" />
                </div>
            </button>
        </>
    )
}

export default BasketWithProduct