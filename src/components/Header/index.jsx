import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img width={'40px'} height={'40px'} src="img/header/logo.png" alr="logo" />
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.profile}>
                <ul>
                    <li onClick={props.onClickBasket} className={styles.basket}>
                        <img width={'18px'} height={'18px'} src="/img/header/basket_icon.svg" alr="basket_icon" />
                        <p>1205 руб.</p>
                    </li>
                    <li>
                        <img width={'21px'} height={'19px'} src="/img/header/like_icon.svg" alr="like_icon" />
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