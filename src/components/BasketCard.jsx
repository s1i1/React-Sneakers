import React from 'react';


const BasketCard = (props) => {
    return (
        <div className="selected__product_item">
            <div className="selected__product_image">
                <img width={'70px'} height={'70px'} src={props.product} alt="product" />
            </div>
            <div className="selected__product_desc">
                <div className="selected__product_container">
                    <div className="selected__product_title">
                        {props.desc}
                    </div>
                    <strong className="selected__product_price">
                        {props.price} руб.
                    </strong>
                </div>
                <button className="selected__product_delete">
                    <img src="/img/main/basket/delete_button.svg" alt="delete_button" />
                </button>
            </div>
        </div>
    );
}

export default BasketCard