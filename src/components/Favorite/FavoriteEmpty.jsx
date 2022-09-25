import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Favorite.module.scss';

const FavoriteEmpty = () => {
    return (
        <div className={styles.empty}>
            <div className={styles.empty__emoji}>
                <img width={'70px'} height={'70px'} src='img/main/favorite/emoji.png' alt='emoji' />
            </div>
            <div className={styles.empty__header}>
                <div className={styles.empty__header_title}>
                    Закладок нет :(
                </div>
                <div className={styles.empty__header_subtitle}>
                    Вы ничего не добавляли в закладки
                </div>
            </div>
            <Link to="/" className={styles.empty__button}>
                <div className={styles.empty__button_image}>
                    <img src='img/main/basket/arrow-left.svg' alt='arrow-left' />
                </div>
                <div className={styles.empty__button_text}>
                    <p>Вернуться назад</p>
                </div>
            </Link>
        </div>
    )
}

export default FavoriteEmpty