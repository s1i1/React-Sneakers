import React from "react";

const Card = (props) => {
    return (
        <div className="cards__item item">
            <button className="item__liked">
                <img src="img/main/cards/not_liked.png" alt="unlike" />
            </button>
            <div className="item__product">
                <img width={'133px'} height={'112px'} src={props.product} alt="product" />
            </div>
            <p className="item__desc">
                {props.desc}
            </p>
            <div className="item__price price">
                <div className="price__block">
                    <p className="price__title">
                        Цена:
                    </p>
                    <strong className="price__value">
                        {props.price} руб.
                    </strong>
                </div>
                <button className="price__check">
                    <img src="img/main/cards/not_checked.svg" alt="not_checked" />
                </button>
            </div>
        </div>
    );
};

export default Card;