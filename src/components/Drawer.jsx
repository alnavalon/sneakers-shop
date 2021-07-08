export default function Drawer() {
    return (
        <div className="overlay" style={{display: "none"}}>
            <div className="drawer d-flex flex-column">
                <div className="drawer__header d-flex justify-between">
                    <h2>Cart</h2>
                    <button className="remove-button mr-20">
                        <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
                    </button>
                </div>
                <div className="cart d-flex flex-column">
                    <div className="cart-item d-flex align-center mb-20">
                        <img className="cart-item__logo" src="/img/sneakers/1.jpg" alt="Sneakers" width={70}
                             height={70}/>
                        <div className="item-description d-flex flex-column">
                            <p className="item-name">Men's shoe Nike Air Max 270</p>
                            <b className="price">600 zł</b>
                        </div>
                        <button className="remove-button">
                            <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
                        </button>
                    </div>
                    <div className="cart-item d-flex align-center mb-20">
                        <img className="cart-item__logo" src="/img/sneakers/2.jpg" alt="Sneakers" width={70}
                             height={70}/>
                        <div className="item-description d-flex flex-column">
                            <p className="item-name">Men's shoe Nike Air Max 270</p>
                            <b className="price">600 zł</b>
                        </div>
                        <button className="remove-button">
                            <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
                        </button>
                    </div>
                    <div className="cart-item d-flex align-center mb-20">
                        <img className="cart-item__logo" src="/img/sneakers/2.jpg" alt="Sneakers" width={70}
                             height={70}/>
                        <div className="item-description d-flex flex-column">
                            <p className="item-name">Men's shoe Nike Air Max 270</p>
                            <b className="price">600 zł</b>
                        </div>
                        <button className="remove-button">
                            <img src="/img/cancel-btn.svg" alt="Remove" width={32} height={32}/>
                        </button>
                    </div>
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
            </div>
        </div>
    );
}