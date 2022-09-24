import React from 'react';
import PurchasesEmpty from '../components/Purchases/PurchasesEmpty';
import Purchases from '../components/Purchases';

const PurchasesPage = ({
    cardItems,
    favoriteItems,
    productData,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite
}) => {
    return (
        productData.length == 0 ?
            <PurchasesEmpty /> :
            <Purchases
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

export default PurchasesPage;