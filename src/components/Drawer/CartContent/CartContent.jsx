import styles from './CartContent.module.scss';
import {useContext} from 'react';
import AppContext from '../../../context';

function CartContent({title, imageUrl, description, setIsOrderComplete}) {
    const {setIsCartOpened} = useContext(AppContext);
    return (
        <div className={styles.cart}>
            <img className={styles.logo} width="120px" height="120px" src={imageUrl} alt="Cart Logo"/>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <button onClick={() => {
                setIsCartOpened(false);
                setIsOrderComplete(false);
            }} className={styles.mainBtn}>
                <img src="/img/arrow.svg" className={styles.arrow} alt="Arrow"/>
                Back
            </button>
        </div>
    );
}

export default CartContent;