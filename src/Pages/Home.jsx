import Card from '../components/Card/Card';
import AppContext from '../context';
import React from 'react';

function Home(props) {
    const {items} = React.useContext(AppContext);

    const renderItems = () => {
        const filteredItems = items.filter((item) => item.title.toLowerCase().includes(props.searchInputValue.toLowerCase()));

        return (props.isLoading ? [...Array(8)] : filteredItems)
            .map((value, index) => (
                <Card
                    key={value?.id ? value.id : index}
                    onAddToCart={props.onAddToCart}
                    onRemoveFromCart={props.onRemoveFromCart}
                    onAddToFavorite={props.onAddToFavorite}
                    onRemoveFromFavorite={props.onRemoveFromFavorite}
                    loading={props.isLoading}
                    {...value}
                />
            ));
    };
    return (
        <section className="content p-40">

            <div className="d-flex justify-between mb-40">
                <h1>{props.searchInputValue ? `Search results for: ${props.searchInputValue}` : `All sneakers`}</h1>
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
            </div>

            <div className="d-flex flex-wrap">
                {
                    renderItems()
                }
            </div>
        </section>
    );
}

export default Home;