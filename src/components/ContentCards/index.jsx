import React from 'react'
import Card from './Card';
import styles from "./ContentCards.module.scss";

const ContentCards = ({ productData, onPlus }) => {
    return (
        <div className={styles.cards}>
            {productData.map((item, index) => {
                return (
                    <Card key={index}
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