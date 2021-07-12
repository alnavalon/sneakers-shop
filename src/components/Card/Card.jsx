import React, {useState} from 'react';
import Styles from './Card.module.scss';

export default function Card(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={Styles.card}>
            <div className={Styles.favorite}>
                <img src="/img/unliked-heart.svg" alt="Like button"/>
            </div>
            <img src={props.imageUrl} alt="Sneakers" width={133} height={112}/>
            <h5 className={Styles.itemName}>{props.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price: </span>
                    <b className="price">{props.price} zł</b>
                </div>
                <img src={isAdded ? '/img/add-btn-checked.svg' : '/img/add-btn.svg'} alt="Add" className={Styles.add}
                     onClick={onClickPlus}/>
            </div>
        </div>
    );
}