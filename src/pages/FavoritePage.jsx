import React from 'react';
import FavoriteEmpty from '../components/Favorite/FavoriteEmpty';
import Favorite from '../components/Favorite/index';

const FavoritePage = ({
    cardItems,
    favoriteItems,
    productData,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite
}) => {
    return (
        <Favorite
            cardItems={cardItems}
            favoriteItems={favoriteItems}
            productData={productData}
            onPlus={onPlus}
            onDelete={onDelete}
            onDeleteFavorite={onDeleteFavorite}
            onFavorite={onFavorite}
        />
    )
}

export default FavoritePage