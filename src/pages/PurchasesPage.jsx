import React from 'react';
import AppContext from '../AppContext';
import PurchasesEmpty from '../components/Purchases/PurchasesEmpty';
import Purchases from '../components/Purchases';

const PurchasesPage = ({
    favoriteItems,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite
}) => {
    const { purchasesHistory } = React.useContext(AppContext);

    return (
        !purchasesHistory.length ?
            <PurchasesEmpty /> :
            <Purchases
                favoriteItems={favoriteItems}
                onPlus={onPlus}
                onDelete={onDelete}
                onDeleteFavorite={onDeleteFavorite}
                onFavorite={onFavorite}
            />
    )
}

export default PurchasesPage;