import React, { useState } from 'react'

const BasketTotal = (props) => {

    let total = 0;
    let tax = 0;

    const sumValue = () => {
        let sum = 0;
        props.productData.map(item => {
            sum += +item.price.replace(' ', '');
        });

        if (sum.toString().length > 4) {
            total = sum
                .toString()
                .split('')
                .map((item, index) => index === 1 ? item + ' ' : item)
                .join('');
            tax = Math.round(sum * 5 / 100);
        } else {
            total = sum;
            tax = Math.round(sum * 5 / 100);
        }

    };
    sumValue();

    return (
        <div className="basket__total total">
            <div className="total__item">
                <p className="total__item_text">Итого: </p>
                <div className="total__item_line">
                    <span></span>
                </div>
                <strong className="total__item_cost">{total} руб.</strong>
            </div>
            <div className="total__item">
                <p className="total__item_text">Налог 5%: </p>
                <div className="total__item_line">
                    <span></span>
                </div>
                <strong className="total__item_cost">{tax} руб. </strong>
            </div>
        </div>
    )
}

export default BasketTotal