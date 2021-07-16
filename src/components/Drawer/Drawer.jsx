import Styles from './Drawer.module.scss';

export default function Drawer(props) {

    console.log(props.cartItems);

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <div className="drawer__header d-flex justify-between">
                    <h2>Cart</h2>
                    <button className="remove-button mr-20" onClick={props.closeCart}>
                        <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
                    </button>
                </div>
                {props.cartItems.length > 0 ? (
                    <>
                        <div className="cart d-flex flex-column">
                            {
                                props.cartItems.map((item) => (
                                    <div className="cart-item d-flex align-center mb-20" key={item.id}>
                                        <img className="cart-item__logo" src={item.imageUrl} alt="Sneakers" width={70}
                                             height={70}/>
                                        <div className="item-description d-flex flex-column">
                                            <p className="item-name">{item.title}</p>
                                            <b className="price">{item.price} zł</b>
                                        </div>
                                        <button className="remove-button">
                                            <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
                                        </button>
                                    </div>)
                                )
                            }
                        </div>
                        <div className="cart__summary">
                            <ul>
                                <li><span>Total: </span>
                                    <div className="decoration"></div>
                                    <b> 2000 zł</b></li>
                                <li><span>Tax 23%:</span>
                                    <div className="decoration"></div>
                                    <b> 500 zł</b></li>
                            </ul>
                            <button className="summary__order-btn greenButton">
                                CHECKOUT
                                <img src="/img/arrow.svg" alt="arrow"/>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={Styles.cartEmpty}>
                        <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.png" alt="Empty"/>
                        <h2>Cart is empty</h2>
                        <p className={Styles.description}>There are no items in your cart</p>
                        <button onClick={props.closeCart} className={Styles.greenButton}>
                            <img src="/img/arrow.svg" className={Styles.arrow} alt="Arrow"/>
                            Back
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}