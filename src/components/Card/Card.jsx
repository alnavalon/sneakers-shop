import React, {useContext} from 'react';
import Styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

export default function Card({
                                 id,
                                 imageUrl,
                                 title,
                                 price,
                                 onAddToCart,
                                 onRemoveFromCart,
                                 onAddToFavorite,
                                 onRemoveFromFavorite,
                                 favorited = false,
                                 loading = false
                             }) {
    const {isItemAddedToCart, isItemAddedToFavorites} = useContext(AppContext);

    const isAddedToCart = isItemAddedToCart(id);
    const isInFavorite = !favorited ? isItemAddedToFavorites(id) : favorited;


    const onClickPlus = () => {
        !isAddedToCart ?
            onAddToCart({itemId: id, imageUrl, title, price}) :
            onRemoveFromCart(id);
    };

    const toggleFavorite = () => {
        !isInFavorite ?
            onAddToFavorite({itemId: id, imageUrl, title, price})
            :
            onRemoveFromFavorite(id);
    };
    const addButtonSrc = () => (isAddedToCart ? '/img/add-btn-checked.svg' : '/img/add-btn.svg');

    return (
        <div className={Styles.card}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={155}
                        height={204}
                        viewBox="0 0 150 187"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
                        <rect x="0" y="107" rx="3" ry="3" width="150" height="10"/>
                        <rect x="0" y="121" rx="3" ry="3" width="93" height="15"/>
                        <rect x="0" y="163" rx="8" ry="8" width="80" height="24"/>
                        <rect x="118" y="155" rx="8" ry="8" width="32" height="32"/>
                    </ContentLoader>

                    :

                    <>
                        <div className={Styles.favorite}>
                            {
                                onAddToFavorite &&
                                <img src={isInFavorite ? '/img/liked-heart.svg' : '/img/unliked-heart.svg'}
                                     alt="Like button"
                                     onClick={toggleFavorite}
                                />
                            }
                        </div>
                        <img src={imageUrl} alt="Sneakers" width={133} height={112}/>
                        <h5 className={Styles.itemName}>{title}</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price: </span>
                                <b className="price">{price} zł</b>
                            </div>
                            {
                                onAddToCart &&
                                <img src={addButtonSrc()} alt="Add"
                                     className={Styles.add}
                                     onClick={onClickPlus}/>
                            }
                        </div>
                    </>
            }
        </div>
    );
}