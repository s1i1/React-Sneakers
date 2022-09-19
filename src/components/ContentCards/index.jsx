import React from 'react'
import Card from './Card';
import styles from "./ContentCards.module.scss";

const ContentCards = ({ cardItems, productData, onPlus }) => {
    return (
        <div className={styles.cards}>
            {productData.map((item, index) => {
                let isAddToBasket = false;

                cardItems.map(obj => {
                    if (obj.product.includes(item.product)) {
                        isAddToBasket = true
                    }
                });

                return (
                    <Card key={index}
                        isAddToBasket={isAddToBasket}
                        product={item.product}
                        desc={item.desc}
                        price={item.price}
                        onPlus={onPlus}
                    />);
            })}
        </div>
    )
}

export default ContentCards