import React, {useState} from 'react';
import Styles from './Card.module.scss';

export default function Card({
                                 id,
                                 imageUrl,
                                 title,
                                 price,
                                 onAddToCart,
                                 onRemoveFromCart,
                                 onAddToFavorite,
                                 onRemoveFromFavorite,
                                 favorited = false
                             }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const changeAddButton = () => {
        setIsAdded(!isAdded);
    };
    const changeFavoriteButton = () => {
        setIsFavorite(prev => !prev);
    };
    const onClickPlus = () => {
        if (!isAdded) {
            onAddToCart({id, imageUrl, title, price}, changeAddButton);
        } else {
            onRemoveFromCart(id, changeAddButton);
        }
    };

    const toggleFavorite = () => {
        !isFavorite ?
            onAddToFavorite({id, imageUrl, title, price}, changeFavoriteButton) :
            onRemoveFromFavorite(id, changeFavoriteButton);
    };

    return (
        <div className={Styles.card}>
            <div className={Styles.favorite}>
                <img src={isFavorite ? '/img/liked-heart.svg' : '/img/unliked-heart.svg'}
                     alt="Like button"
                     onClick={toggleFavorite}
                />
            </div>
            <img src={imageUrl} alt="Sneakers" width={133} height={112}/>
            <h5 className={Styles.itemName}>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price: </span>
                    <b className="price">{price} zł</b>
                </div>
                <img src={isAdded ? '/img/add-btn-checked.svg' : '/img/add-btn.svg'} alt="Add" className={Styles.add}
                     onClick={onClickPlus}/>
            </div>
        </div>
    );
}