import styles from './Drawer.module.scss';
import {useContext, useState} from 'react';
import AppContext from '../../context';
import CartContent from './CartContent/CartContent';
import {cartAPI, ordersAPI} from '../Api/Api';
import {CartItem} from './CartItem/CartItem';

export default function Drawer(props) {
    const {
        cartItems,
        setCartItems,
        cartTotalPrice,
        isCartOpened,
        setIsCartOpened
    } = useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const delay = (ms) => new Promise((resolve => setTimeout(resolve, ms)));

    const onClickOnOrder = async () => {
        setIsLoading(true);
        setIsOrderComplete(true);
        try {
            const result = await ordersAPI.addOrder({cartItems, cartTotalPrice});
            if (result.status === 201) {
                for (let i = 0; i < cartItems.length; i++) {
                    await cartAPI.deleteItemFromCart(cartItems[i].id);
                    await delay(500);
                }
                setCartItems([]);
                setOrderNumber(result.data.id);
            } else {
                alert(`Server doesn't response. Please try it later`);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className={`${styles.overlay} ${isCartOpened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Cart</h2>
                    <button className={styles.removeButton} onClick={() => {
                        setIsCartOpened(false);
                        setIsOrderComplete(false);
                    }}>
                        <img src="/img/cancel-btn.svg" alt="Close cart" width={32} height={32}/>
                    </button>
                </div>
                {cartItems.length > 0 ?
                    <>
                        <div className={styles.cart}>
                            {
                                cartItems.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            imageUrl={item.imageUrl}
                                        />
                                    )
                                )
                            }
                        </div>
                        <div className={styles.summary}>
                            <ul>
                                <li><span>Total: </span>
                                    <div className={styles.decoration}></div>
                                    <b> {cartTotalPrice} zł</b></li>
                                <li><span>Tax 23%:</span>
                                    <div className={styles.decoration}></div>
                                    <b> {(cartTotalPrice * 0.23).toFixed(2)} zł</b></li>
                            </ul>
                            <button
                                className={styles.orderButton}
                                onClick={onClickOnOrder}
                                disabled={isLoading}
                            >
                                CHECKOUT
                                <img src="/img/arrow.svg" alt="arrow"/>
                            </button>
                        </div>
                    </>
                    :
                    <CartContent
                        title={isOrderComplete ? `Your order #${orderNumber} has been completed` : `Cart is empty`}
                        imageUrl={isOrderComplete ? `/img/complete-order.png` : `/img/empty-cart.png`}
                        description={isOrderComplete ?
                            `Your order will be delivered soon` :
                            `There are no items in your cart`}
                        setIsOrderComplete={setIsOrderComplete}
                    />
                }

            </div>
        </div>
    );
}