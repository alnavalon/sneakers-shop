import Card from './Card/Card';

export default function Content(props) {
    console.log(props.data);

    return (
        <section className="content p-40">

            <div className="d-flex justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex align-center">
                    <img src="/img/search.svg" alt="Search"/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {props.data.map(value => (
                    <Card
                        imageUrl={value.imageUrl}
                        name={value.name}
                        price={value.price}
                        key={value.name}
                    />
                ))
                }
            </div>
        </section>
    );
}