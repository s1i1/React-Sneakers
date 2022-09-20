import React from "react";
import styles from "./ContentCards.module.scss";

const Card = ({ isAddToBasket, product, desc, price, onPlus, onDelete }) => {

    const handlerAddClick = () => {
        if (isAddToBasket) {
            onDelete(product);
        } else {
            onPlus({ product, desc, price })
        }
    };

    return (
        <div className={styles.cards__item}>
            <button className={styles.item__liked}>
                <img src="img/main/cards/not_liked.png" alt="unlike" />
            </button>
            <div className={styles.item__product}>
                <img width={'133px'} height={'112px'} src={product} alt="product" />
            </div>
            <p className={styles.item__desc}>
                {desc}
            </p>
            <div className={styles.price}>
                <div>
                    <p className={styles.price__title}>
                        Цена:
                    </p>
                    <strong>
                        {price} руб.
                    </strong>
                </div>
                <button
                    onClick={handlerAddClick}
                    className={styles.price__check}>
                    <img src={
                        isAddToBasket ?
                            "img/main/cards/check.svg" :
                            "img/main/cards/not_checked.svg"
                    } alt="not_checked" />
                </button>
            </div>
        </div>
    );
};

export default Card;