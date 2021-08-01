import {Link} from 'react-router-dom';
import {useContext} from 'react';
import AppContext from '../../context';
import styles from './Header.module.scss';

export default function Header({onClickCart}) {
    const {cartTotalPrice} = useContext(AppContext);

    return (
        <header>
            <Link to="/">
                <div className={styles.leftSide}>
                    <img className={styles.logo} src="/img/logo.svg" alt="Logo"/>
                    <div className={styles.title}>
                        <h3 className="text-uppercase">sneakers for you</h3>
                        <p>The best sneaker's store</p>
                    </div>
                </div>
            </Link>
            <ul className={styles.navigation}>
                <li onClick={onClickCart}>
                    <img src="/img/cart.png" alt="Cart"/>
                    <span><b>{`${cartTotalPrice} zł`}</b></span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img src="/img/like.png" alt="Favorite sneakers"/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img src="/img/user.png" alt="User's console"/>
                    </Link>
                </li>

            </ul>
        </header>
    );
}