import React from 'react';
import styles from './ContentTop.module.scss';

const ContentTop = () => {
    return (
        <div className={styles.top}>
            <h1>Все кроссовки</h1>
            <div className={styles.search}>
                <div className={styles.search__icon}>
                    <img width={'14px'} height={'14px'} src="/img/main/search/search.svg" alt="search" />
                </div>
                <input placeholder="Поиск..." />
            </div>
        </div>
    )
}

export default ContentTop