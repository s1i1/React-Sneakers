import React from 'react';
import styles from './ContentTop.module.scss';

const ContentTop = ({ onChangeSearch }) => {
    return (
        <div className={styles.top}>
            <h1>Все кроссовки</h1>
            <div className={styles.search}>
                <div className={styles.search__icon}>
                    <img width={'14px'} height={'14px'} src="./img/main/search/search.svg" alt="search" />
                </div>
                <input
                    onChange={onChangeSearch}
                    placeholder="Поиск..." />
                <button className={styles.delete__button}>
                    <img width={'20px'} height={'20px'}
                        src='./img/main/basket/delete_button.svg' alt='delete_button' />
                </button>
            </div>
        </div>
    )
}

export default ContentTop