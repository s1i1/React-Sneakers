import React from 'react';
import Favorite from '../components/Favorite/Favorite';

const FavoritePage = ({ cardItems, productData, onPlus, onDelete }) => {
    return (
        <Favorite
            cardItems={cardItems}
            productData={productData}
            onPlus={(obj) => onPlus(obj)}
            onDelete={onDelete}
        />
    )
}

export default FavoritePage