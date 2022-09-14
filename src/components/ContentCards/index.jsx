import React from 'react'
import Card from './Card';
import styles from "./ContentCards.module.scss";

const ContentCards = (props) => {
    return (
        <div className={styles.cards}>
            {props.productData.map((item, index) => {
                return (<Card key={index}
                    product={item.product}
                    desc={item.desc}
                    price={item.price}
                />);
            })}
        </div>
    )
}

export default ContentCards