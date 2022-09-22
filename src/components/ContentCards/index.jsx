import React from 'react'
import Card from './Card';
import styles from "./ContentCards.module.scss";

const ContentCards = ({ cardItems, productData, onPlus, onDelete }) => {
    return (
        <div className={styles.cards}>
            {productData.map((item) => {
                let isAddToBasket = false;

                cardItems.map(obj => {
                    if (obj.product.includes(item.product)) {
                        isAddToBasket = true
                    }
                });

                return (
                    <Card key={item.product}
                        isAddToBasket={isAddToBasket}
                        product={item.product}
                        desc={item.desc}
                        price={item.price}
                        onPlus={onPlus}
                        onDelete={onDelete}
                    />);
            })}
        </div>
    )
}

export default ContentCards