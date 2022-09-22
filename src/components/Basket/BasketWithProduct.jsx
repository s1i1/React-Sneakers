import React from 'react'
import BasketCard from "./BasketCard";
import BasketTotal from "./BasketTotal";
import styles from './Basket.module.scss';

const BasketWithProduct = ({
    total,
    setTotal,
    tax,
    setTax,
    onClickDeleteCard,
    items
}) => {
    return (
        <>
            <div className={styles.basket__cards}>
                {items.map((item) => {
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
            <BasketTotal
                total={total}
                setTotal={setTotal}
                tax={tax}
                setTax={setTax}
                productData={items} />
            <div className={styles.basket__button}>
                <div className={styles.basket__button_text}>
                    Оформить заказ
                </div>
                <div className={styles.basket__button_image}>
                    <img src="img/main/basket/arrow.svg" alt="arrow" />
                </div>
            </div>
        </>
    )
}

export default BasketWithProduct