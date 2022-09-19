import React from 'react';
import styles from './Basket.module.scss';

const BasketCard = ({ product, desc, price }) => {
    return (
        <div className={styles.selected__product_item}>
            <div>
                <img width={'70px'} height={'70px'} src={product} alt="product" />
            </div>
            <div className={styles.selected__product_desc}>
                <div className={styles.selected__product_container}>
                    <div className={styles.selected__product_title}>
                        {desc}
                    </div>
                    <strong>
                        {price} руб.
                    </strong>
                </div>
                <button className={styles.selected__product_delete}>
                    <img src="/img/main/basket/delete_button.svg" alt="delete_button" />
                </button>
            </div>
        </div>
    );
}

export default BasketCard