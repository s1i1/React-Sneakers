import React from 'react';
import FavoriteEmpty from '../components/Favorite/FavoriteEmpty';
import Favorite from '../components/Favorite/index';

const FavoritePage = ({ cardItems, productData, onPlus, onDelete }) => {
    return (
        <FavoriteEmpty />
        // <Favorite
        //     cardItems={cardItems}
        //     productData={productData}
        //     onPlus={(obj) => onPlus(obj)}
        //     onDelete={onDelete}
        // />
    )
}

export default FavoritePage