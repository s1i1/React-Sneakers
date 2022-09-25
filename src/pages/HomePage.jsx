import React from 'react';
import ContentTop from "../components/ContentTop";
import ContentCards from "../components/ContentCards";

const HomePage = ({
    handlerClickSearchDelete,
    onChangeSearch,
    searchValue,
    cardItems,
    productData,
    favoriteItems,
    onPlus,
    onDelete,
    onDeleteFavorite,
    onFavorite,
    isLoading
}) => {

    return (
        <>
            <ContentTop
                handlerClickSearchDelete={handlerClickSearchDelete}
                onChangeSearch={onChangeSearch}
                searchValue={searchValue}
            />
            <ContentCards
                cardItems={cardItems}
                productData={productData}
                favoriteItems={favoriteItems}
                onPlus={onPlus}
                onDelete={onDelete}
                onDeleteFavorite={onDeleteFavorite}
                onFavorite={onFavorite}
                isLoading={isLoading}
            />
        </>
    )
}

export default HomePage