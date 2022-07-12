import React, {useState} from 'react';
import styles from './Card.module.scss'

function Card({id, onFavorite, imageUrl, title, price, onPlus, favorited = false}) {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({title, imageUrl, price})
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price})
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="d-flex">
            <div className={styles.card}>
                <div className={styles.favorite} onClick={onClickFavorite}>
                    <img src={isFavorite ? "/img/liked.svg" : "/img/un-liked.svg"} alt="Plus" alt="Unliked"/>
                </div>
                <img width={133} height={112} src={imageUrl} alt=""/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    <img className={styles.plus} onClick={onClickPlus}
                         src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
                </div>
            </div>
        </div>
    );
}

export default Card