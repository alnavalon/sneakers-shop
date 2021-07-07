import React from 'react';

function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="header-left d-flex align-center">
                    <a href="#">
                        <img src="/img/logo.svg" alt="Logo" className="header-logo"/>
                    </a>
                    <div className="header-info">
                        <h3 className="text-uppercase">sneakers for you</h3>
                        <p>The best sneaker's store</p>
                    </div>
                </div>
                <ul className="header-right d-flex justify-between align-center">
                    <li className="mr-30">
                        <a href="#">
                            <img src="/img/cart.png" alt="Cart" className="mr-10"/>
                        </a>
                        <span>602 zł</span>
                    </li>
                    <li className="mr-30">
                        <a href="#">
                            <img src="/img/like.png" alt="Favorite sneakers"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/img/user.png" alt="User's console"/>
                        </a>
                    </li>

                </ul>
            </header>
            <section className="content p-40">

                <div className="d-flex justify-between mb-40">
                    <h1>All sneakers</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                </div>

                <div className="d-flex justify-between">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/unliked-heart.svg" alt="Like button"/>
                        </div>
                        <img src="/img/sneakers/1.jpg" alt="Sneakers" width={133} height={112}/>
                        <h5 className="item-name">Men's shoe Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price: </span>
                                <b className="price">600 zł</b>
                            </div>
                            <button className="add-button">
                                <img src="/img/add.svg" alt="Add" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/img/sneakers/2.jpg" alt="Sneakers" width={133} height={112}/>
                        <h5 className="item-name">Men's shoe Nike Air Max 270</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price: </span>
                                <b className="price">600 zł</b>
                            </div>
                            <button className="add-button">
                                <img src="/img/add.svg" alt="Add" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/img/sneakers/3.jpg" alt="Sneakers" width={133} height={112}/>
                        <h5 className="item-name">Men's shoe Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price: </span>
                                <b className="price">600 zł</b>
                            </div>
                            <button className="add-button">
                                <img src="/img/add.svg" alt="Add" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/img/sneakers/4.jpg" alt="Sneakers" width={133} height={112}/>
                        <h5 className="item-name">Men's shoe Puma X Aka Boku Future Rider</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price: </span>
                                <b className="price">600 zł</b>
                            </div>
                            <button className="add-button">
                                <img src="/img/add-btn.svg" alt="Add" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="overlay">
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
        </div>
    );
}

export default App;
