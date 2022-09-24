import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Purchases.module.scss';
import ContentCards from '../ContentCards';

const Purchases = ({
    cardItems,
    favoriteItems,
    productData,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite
}) => {
    return (
        <>
            <div className={styles.header}>
                <Link to="/" className={styles.header__image}>
                    <img src='./img/main/favorite/get-back-arrow.svg' alt='get-back-arrow' />
                </Link>
                <h1>Мои покупки</h1>
            </div>
            <div className='content__cards'>
                <ContentCards
                    cardItems={cardItems}
                    productData={productData}
                    favoriteItems={favoriteItems}
                    onPlus={onPlus}
                    onDelete={onDelete}
                    onDeleteFavorite={onDeleteFavorite}
                    onFavorite={onFavorite}
                />
            </div>
        </>
    )
}

export default Purchases;