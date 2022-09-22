import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ total, onClickBasket }) => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img width={'40px'} height={'40px'} src="img/header/logo.png" alr="logo" />
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </Link>
            <div className={styles.profile}>
                <ul>
                    <li onClick={onClickBasket} className={styles.basket}>
                        <img width={'18px'} height={'18px'} src="/img/header/basket_icon.svg" alr="basket_icon" />
                        <p>{total} руб.</p>
                    </li>
                    <li>
                        <Link to="/favorite">
                            <img width={'21px'} height={'19px'} src="/img/header/like_icon.svg" alr="like_icon" />
                        </Link>
                    </li>
                    <li>
                        <img width={'20px'} height={'20px'} src="/img/header/profile_icon.svg" alr="profile_icon" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header