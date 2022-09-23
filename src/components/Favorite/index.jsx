import React from 'react';
import styles from './Favorite.module.scss';
import ContentCards from '../ContentCards';

const Favorite = ({ cardItems, productData, onPlus, onDelete }) => {
    return (
        <>
            <div className={styles.header}>
                <div className='image'>
                    <img src='./img/main/favorite/get-back-arrow.svg' alt='get-back-arrow' />
                </div>
                <h1>Мои закладки</h1>
            </div>
            <div className='content__cards'>
                <ContentCards
                    cardItems={cardItems}
                    productData={productData}
                    onPlus={onPlus}
                    onDelete={onDelete}
                />
            </div>
        </>
    )
}

export default Favorite