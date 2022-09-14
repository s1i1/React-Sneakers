import React from 'react'
import Card from './Card';

const ContentCards = (props) => {
    return (
        <div className="content__cards cards">
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