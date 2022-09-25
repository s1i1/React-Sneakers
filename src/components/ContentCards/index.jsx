import React from 'react'
import Card from './Card';
import styles from "./ContentCards.module.scss";
import EmptyCard from './EmptyCard';

const ContentCards = ({
    cardItems,
    productData,
    favoriteItems,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite,
    isLoading
}) => {
    return (
        <div className={styles.cards}>
            {isLoading ?
                <EmptyCard />
                :
                productData.map((item) => {
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
                })
            }
        </div>
    )
}

export default ContentCards