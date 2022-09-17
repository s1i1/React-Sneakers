import React from 'react'
import styles from './Basket.module.scss';
import calculateTotal from './calculateTotal';

const BasketTotal = ({ total, setTotal, tax, setTax, productData }) => {
    const calcSum = () => {
        let objValue = calculateTotal(productData, total, tax);
        setTotal(objValue.total);
        setTax(objValue.tax);
    };

    React.useEffect(() => {
        calcSum();
    }, [total, tax]);

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