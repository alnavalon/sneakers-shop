import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked-heart.svg" alt="Like button"/>
            </div>
            <img src={"/img/sneakers/" + props.photo + ".jpg"} alt="Sneakers" width={133} height={112}/>
            <h5 className="item-name">{props.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price: </span>
                    <b className="price">{props.price} zł</b>
                </div>
                <button className="add-button">
                    <img src="/img/add.svg" alt="Add" width={11} height={11}/>
                </button>
            </div>
        </div>
    );
}