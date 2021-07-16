import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';
import Home from './Pages/Home';
import {cartAPI, favoriteAPI, itemsAPI} from './components/Api/Api';
import {Route, Switch} from 'react-router-dom';
import Favorites from './Pages/Favorites';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [isCartOpened, setIsCartOpened] = useState(false);

    useEffect(() => {
            itemsAPI.getItems().then(result => setItems(result.data));
            cartAPI.getCart().then(result => setCartItems(result.data));
            favoriteAPI.getFavorite().then(result => setFavoriteItems(result.data));
        },
        []);


    const onAddToCart = (item, func) => {
        cartAPI.addItemToCart(item).then(
            result => {
                if (result.status === 201) {
                    setCartItems(prev => [...prev, item]);
                    func();
                } else {
                    alert(`Server error, try to add an item later`);
                }
            }
        );
    };

    const onRemoveFromCart = (id, func) => {
        cartAPI.deleteItemFromCart(id).then(result => {
            if (result.status === 200) {
                func();
                setCartItems(prev => [...prev].filter((item) => item.id !== id));
            } else {
                alert(`Cannot delete the item from the cart. Please try it again later`);
            }
        });
    };

    const onAddToFavorite = async (item, func) => {
        try {
            if (favoriteItems.find(obj => obj.id === item.id)) {
                alert('The item has already been added to favorites');
            } else {
                const {data} = await favoriteAPI.addItem(item);
                setFavoriteItems(prev => [...prev, data]);
                func();
            }
        } catch (error) {
            alert(error);
        }
    };


    const onRemoveFromFavorite = (id, func) => {
        favoriteAPI.deleteItem(id).then(result => {
            setFavoriteItems(prev => [...prev].filter(item => item.id !== id));
            func();
        });
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);

    };

    const clearSearchValue = () => {
        setSearchValue(``);
    };


    return (
        <div className="wrapper clear">
            <Header
                onClickCart={() => setIsCartOpened(!isCartOpened)}
            />
            <Switch>
                <Route path="/favorites" exact>
                    <Favorites
                        data={favoriteItems}
                        onAddToCart={onAddToCart}
                        onRemoveFromCart={onRemoveFromCart}
                        onChangeSearchInput={onChangeSearchInput}
                        searchInputValue={searchValue}
                        clearSearchValue={clearSearchValue}
                        onAddToFavorite={onAddToFavorite}
                        onRemoveFromFavorite={onRemoveFromFavorite}
                    />
                </Route>
                <Route path="/" exact>
                    <Home
                        data={items}
                        onAddToCart={onAddToCart}
                        onRemoveFromCart={onRemoveFromCart}
                        onChangeSearchInput={onChangeSearchInput}
                        searchInputValue={searchValue}
                        clearSearchValue={clearSearchValue}
                        onAddToFavorite={onAddToFavorite}
                        onRemoveFromFavorite={onRemoveFromFavorite}
                    />
                </Route>

            </Switch>

            {isCartOpened &&
            <Drawer
                closeCart={() => setIsCartOpened(!isCartOpened)}
                cartItems={cartItems}
            />}
        </div>
    );
}

export default App;
