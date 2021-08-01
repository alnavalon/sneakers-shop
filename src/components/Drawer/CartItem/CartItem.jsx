import styles from './CartItem.module.scss';
import {useContext} from 'react';
import AppContext from '../../../context';

export function CartItem({id, title, price, imageUrl}) {
    const {onRemoveFromCart} = useContext(AppContext);

    return (
        <div className={styles.cartItem}>
            <img className={styles.logo} src={imageUrl} alt="Sneakers" width={70}
                 height={70}/>
            <div className={styles.description}>
                <p className="item-name">{title}</p>
                <b className="price">{price} zł</b>
            </div>
            <button
                className={styles.removeButton}
                onClick={() => {
                    onRemoveFromCart(id);
                }}
            >
                <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
            </button>
        </div>
    );
};