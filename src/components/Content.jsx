import Card from './Card';

export default function Content(props) {
    return (
        <section className="content p-40">

            <div className="d-flex justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex align-center">
                    <img src="/img/search.svg" alt="Search"/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>

            <div className="d-flex justify-between">
                <Card
                    photo={"1"}
                    name={"Men's shoe Nike Blazer Mid Suede"}
                    price={500}
                />
                <Card
                    photo={"2"}
                    name={"Men's shoe Nike Air Max 270"}
                    price={365}
                />
                <Card
                    photo={"3"}
                    name={"Men's shoe Nike Blazer Mid Suede"}
                    price={799}
                />
                <Card
                    photo={"4"}
                    name={"Men's shoe Puma X Aka Boku Future Rider"}
                    price={459}
                />

            </div>
        </section>
    );
}