import React from 'react';
import styles from './Basket.module.scss';

const BasketEmpty = ({ onClickCloseOverlay }) => {
    return (
        <div className={styles.empty}>
            <div className={styles.empty__image}>
                <img width={'120px'} height={'120px'} src='img/main/basket/box.png' alt='box' />
            </div>
            <div className={styles.empty__header}>
                <h2 className={styles.empty__header_title}>
                    Корзина пустая
                </h2>
                <p className={styles.empty__header_subtitle}>
                    Добавьте хотя бы одну пару
                    <br />кроссовок, чтобы сделать заказ.
                </p>
            </div>
            <button
                className={styles.empty__button}
                onClick={onClickCloseOverlay}
            >
                <div>
                    <img width={'14px'} height={'12px'} src='img/main/basket/arrow-left.svg' alt='arrow' />
                    <p>Вернуться назад</p>
                </div>
            </button>
        </div>
    )
}

export default BasketEmpty