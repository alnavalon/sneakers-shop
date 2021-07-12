import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';
import Content from './components/Content';
import {itemsAPI} from './components/Api/Api';


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const [isCartOpened, setIsCartOpened] = useState(false);


    useEffect(() => {
            itemsAPI.getItems().then(result => setItems(result.data));
        },
        []);

    return (
        <div className="wrapper clear">
            <Header
                onClickCart={() => setIsCartOpened(!isCartOpened)}/>
            <Content data={items}/>
            {isCartOpened &&
            <Drawer
                closeCart={() => setIsCartOpened(!isCartOpened)}
                cartItems={cartItems}
            />}
        </div>
    );
}

export default App;
