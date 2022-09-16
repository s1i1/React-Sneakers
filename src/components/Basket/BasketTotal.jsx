import React, { useState } from 'react'
import styles from './Basket.module.scss';

const BasketTotal = (props) => {

    let total = 0;
    let tax = 0;

    const sumValue = () => {
        let sum = 0;
        props.productData.map(item => {
            sum += +item.price.replace(' ', '');
        });

        if (sum.toString().length > 4) {
            total = sum
                .toString()
                .split('')
                .map((item, index) => index === 1 ? item + ' ' : item)
                .join('');
            tax = Math.round(sum * 5 / 100);
        } else {
            total = sum;
            tax = Math.round(sum * 5 / 100);
        }

    };
    sumValue();

    return (
        <div className={styles.total}>
            <div className={styles.total__item}>
                <p className={styles.total__item_text}>Итого: </p>
                <div className={styles.total__item_line}>
                    <span></span>
                </div>
                <strong>{total} руб.</strong>
            </div>
            <div className={styles.total__item}>
                <p className={styles.total__item_text}>Налог 5%: </p>
                <div className={styles.total__item_line}>
                    <span></span>
                </div>
                <strong>{tax} руб.</strong>
            </div>
        </div>
    )
}

export default BasketTotal