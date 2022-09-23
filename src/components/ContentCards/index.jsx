import React from 'react'
import Card from './Card';
import styles from "./ContentCards.module.scss";

const ContentCards = ({
    cardItems,
    productData,
    favoriteItems,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite
}) => {
    return (
        <div className={styles.cards}>
            {productData.map((item) => {
                let isAddToBasket = false;
                let isAddToFavorite = false;

                cardItems.map(obj => {
                    if (obj.product.includes(item.product)) {
                        isAddToBasket = true
                    }
                });

                favoriteItems.map(obj => {
                    if (obj.product.includes(item.product)) {
                        isAddToFavorite = true
                    }
                });

                return (
                    <Card key={item.product}
                        isAddToBasket={isAddToBasket}
                        isAddToFavorite={isAddToFavorite}
                        product={item.product}
                        desc={item.desc}
                        price={item.price}
                        onPlus={onPlus}
                        onDelete={onDelete}
                        onDeleteFavorite={onDeleteFavorite}
                        onFavorite={onFavorite}
                    />);
            })}
        </div>
    )
}

export default ContentCards