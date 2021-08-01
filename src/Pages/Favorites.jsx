import Card from '../components/Card/Card';
import AppContext from '../context';
import React from 'react';

export default function Favorites(props) {
    const {favoriteItems} = React.useContext(AppContext);

    return (
        <div className="content p-40">

            <div className="d-flex justify-between mb-40">
                {
                    favoriteItems.length !== 0 ?
                        <>
                            <h1>{props.searchInputValue ? `Search results for: ${props.searchInputValue}` : `Your favorites`}</h1>
                            <div className="search-block d-flex align-center">
                                <img src="/img/search.svg" className="mr-15" alt="Search"/>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    onChange={props.onChangeSearchInput}
                                    value={props.searchInputValue}
                                />
                                {props.searchInputValue &&
                                <img src="/img/cancel-btn.svg" onClick={props.clearSearchValue} alt="Clear" width="17"
                                     height="17"/>}
                            </div>
                        </>
                        :
                        <h1>Your favorites are empty</h1>
                }
            </div>

            <div className="d-flex flex-wrap">
                {favoriteItems.filter((item) => item.title.toLowerCase().includes(props.searchInputValue.toLowerCase())).map(value => (
                    <Card
                        key={value.id}
                        id={value.id}
                        imageUrl={value.imageUrl}
                        title={value.title}
                        price={value.price}
                        onAddToCart={props.onAddToCart}
                        onRemoveFromCart={props.onRemoveFromCart}
                        onAddToFavorite={props.onAddToFavorite}
                        onRemoveFromFavorite={props.onRemoveFromFavorite}
                        favorited={true}
                    />
                ))
                }
            </div>
        </div>
    );
}