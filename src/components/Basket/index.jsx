import React from 'react';
import BasketCard from "./BasketCard";
import BasketTotal from "./BasketTotal";
import styles from './Basket.module.scss';

const Basket = ({ onClickOverlay, items = [] }) => {
    return (
        <div>
            <div
                className={styles.basket__overlay}
                onClick={onClickOverlay}
            ></div>
            <div className={styles.basket__container}>
                <div className={styles.basket__title}>
                    <h3 className={styles.basket__title_text}>Корзина</h3>
                    <button className={styles.basket__title_button}>
                        <img width={'25px'} height={'25px'}
                            src="/img/main/basket/delete_button.svg" alt="delete_button" />
                    </button>
                </div>
                <div className={styles.basket__cards}>
                    {items.map((item, index) => {
                        return (
                            <BasketCard
                                key={index}
                                product={item.product}
                                desc={item.desc}
                                price={item.price}
                            />)
                    })}
                </div>
                <BasketTotal productData={items} />
                <div className={styles.basket__button}>
                    <div className={styles.basket__button_text}>
                        Оформить заказ
                    </div>
                    <div className={styles.basket__button_image}>
                        <img src="img/main/basket/arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket