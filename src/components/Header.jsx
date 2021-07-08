export default function Header(props) {
    return (
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
    );
}