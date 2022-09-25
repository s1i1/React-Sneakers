import React from 'react';
import AppContext from '../../AppContext';
import styles from './Basket.module.scss';
import calculateTotal from './calculateTotal';

const BasketTotal = () => {
    const { cardItems, total, setTotal, tax, setTax } = React.useContext(AppContext);

    React.useEffect(() => {
        calculateTotal(cardItems, total, setTotal, tax, setTax);
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