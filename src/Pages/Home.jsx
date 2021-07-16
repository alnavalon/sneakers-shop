import Card from '../components/Card/Card';

function Home(props) {

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
                {props.data.filter((item) => item.title.toLowerCase().includes(props.searchInputValue.toLowerCase())).map(value => (
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
                    />
                ))
                }
            </div>
        </section>
    );
}

export default Home;