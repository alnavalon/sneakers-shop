import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="header-left d-flex align-center">
                    <img src="/img/logo.svg" alt="Logo" className="header-logo"/>
                    <div className="header-info">
                        <h3 className="text-uppercase">sneakers for you</h3>
                        <p>The best sneaker's store</p>
                    </div>
                </div>
            </Link>
            <ul className="header-right d-flex justify-between align-center">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img src="/img/cart.png" alt="Cart" className="mr-10"/>
                    <span>602 zł</span>
                </li>
                <li className="mr-30">
                    <Link to="/favorites">
                        <img src="/img/like.png" alt="Favorite sneakers"/>
                    </Link>
                </li>
                <li>
                    <img src="/img/user.png" alt="User's console"/>
                </li>

            </ul>
        </header>
    );
}