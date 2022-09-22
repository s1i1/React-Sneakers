import React from 'react';
import ContentTop from "../components/ContentTop";
import ContentCards from "../components/ContentCards";

const HomePage = ({
    handlerClickSearchDelete,
    onChangeSearch,
    searchValue,
    cardItems,
    productData,
    onPlus,
    onDelete
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
                onPlus={onPlus}
                onDelete={onDelete}
            />
        </>
    )
}

export default HomePage