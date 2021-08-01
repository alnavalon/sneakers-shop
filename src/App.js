import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Home from './Pages/Home';
import {cartAPI, favoriteAPI, itemsAPI} from './components/Api/Api';
import {Route, Switch} from 'react-router-dom';
import Favorites from './Pages/Favorites';
import AppContext from './context';
import {Orders} from './Pages/Orders';


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    useEffect(() => {
            async function fetchAllData() {
                setIsLoading(true);
                const cartItemsResponse = await cartAPI.getCart();
                setCartItems(cartItemsResponse.data);
                const favoriteResponse = await favoriteAPI.getFavorite();
                setFavoriteItems(favoriteResponse.data);
                const itemsResponse = await itemsAPI.getItems();
                setItems(itemsResponse.data);

                setIsLoading(false);
            }

            fetchAllData();
        },
        []);

    useEffect(() => {
            setCartTotalPrice(cartItems && cartItems.reduce((sum, item) => sum + item.price, 0));
        },
        [cartItems]);

    const onAddToCart = (item) => {
        try {
            if (cartItems.find(obj => obj.itemId === item.itemId)) {
                alert('The item has already been added to the cart');
            } else {
                cartAPI.addItemToCart(item).then(
                    result => {
                        if (result.status === 201) {
                            setCartItems(prev => [...prev, result.data]);
                        } else {
                            alert(`Server error, try to add an item later`);
                        }
                    }
                );
            }
        } catch (e) {
            alert(e);
        }
    };

    const onRemoveFromCart = (id) => {
        let removedItem = cartItems.find(obj => obj.itemId === id);
        let resultId = removedItem ? removedItem.id : id;
        cartAPI.deleteItemFromCart(resultId).then(result => {
            if (result.status === 200) {
                setCartItems(prev => [...prev].filter((item) => item.id !== resultId));
            } else {
                alert(`Cannot delete the item from the cart. Please try it again later`);
            }
        });
    };

    const onAddToFavorite = async (item) => {
        try {
            if (favoriteItems.find(obj => obj.id === item.id)) {
                alert('The item has already been added to favorites');
            } else {
                const {data} = await favoriteAPI.addItem(item);
                setFavoriteItems(prev => [...prev, data]);
            }
        } catch (e) {
            alert(e);
        }
    };

    const onRemoveFromFavorite = async (id) => {
        let removedItem = favoriteItems.find(obj => obj.itemId === id);
        let resultId = removedItem ? removedItem.id : id;

        try {
            const result = await favoriteAPI.deleteItem(resultId);
            setFavoriteItems(prev => [...prev].filter(item => item.id !== result.data.id));
        } catch (e) {
            alert(e);
            console.warn(e);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const clearSearchValue = () => {
        setSearchValue(``);
    };

    const isItemAddedToCart = (id) => cartItems.some(obj => Number(obj.itemId) === Number(id));
    const isItemAddedToFavorites = (id) => favoriteItems.some(obj => Number(obj.itemId) === Number(id));

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                setCartItems,
                favoriteItems,
                cartTotalPrice,
                isCartOpened,
                setIsCartOpened,
                onRemoveFromCart,
                isItemAddedToCart,
                isItemAddedToFavorites
            }}>
            <div className="wrapper clear">
                <Header
                    onClickCart={() => setIsCartOpened(!isCartOpened)}
                />
                <Switch>
                    <Route path="/favorites" exact>
                        <Favorites
                            onAddToCart={onAddToCart}
                            onRemoveFromCart={onRemoveFromCart}
                            onChangeSearchInput={onChangeSearchInput}
                            searchInputValue={searchValue}
                            clearSearchValue={clearSearchValue}
                            onAddToFavorite={onAddToFavorite}
                            onRemoveFromFavorite={onRemoveFromFavorite}
                        />
                    </Route>
                    <Route path="/orders" exact>
                        <Orders/>
                    </Route>
                    <Route path="/" exact>
                        <Home
                            onAddToCart={onAddToCart}
                            onRemoveFromCart={onRemoveFromCart}
                            onChangeSearchInput={onChangeSearchInput}
                            searchInputValue={searchValue}
                            clearSearchValue={clearSearchValue}
                            onAddToFavorite={onAddToFavorite}
                            onRemoveFromFavorite={onRemoveFromFavorite}
                            isLoading={isLoading}
                        />
                    </Route>

                </Switch>

                <Drawer/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
