import React from 'react'

const ContentTop = () => {
    return (
        <div className="content__top">
            <h1 className="content__title">Все кроссовки</h1>
            <div className="content__search search">
                <div className="search__icon">
                    <img width={'14px'} height={'14px'} src="/img/main/search/search.svg" alt="search" />
                </div>
                <input placeholder="Поиск..." />
            </div>
        </div>
    )
}

export default ContentTop