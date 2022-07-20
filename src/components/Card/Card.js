import React, {useState} from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from "../../context";


function Card({
                  id,
                  onFavorite,
                  imageUrl,
                  title, price,
                  onPlus,
                  favorited = false,
                  added = false,
                  loading = false
              }) {

    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const { isItemAdded } = React.useContext(AppContext)

    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price})
    };

    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price})
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="d-flex">
            <div className={styles.card}>
                {
                    loading ? <ContentLoader
                            speed={2}
                            width={155}
                            height={265}
                            viewBox="0 0 155 265"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="10" ry="10" width="155" height="91"/>
                            <rect x="0" y="99" rx="5" ry="5" width="155" height="15"/>
                            <rect x="0" y="120" rx="5" ry="5" width="100" height="15"/>
                            <rect x="0" y="158" rx="5" ry="5" width="80" height="25"/>
                            <rect x="124" y="153" rx="10" ry="10" width="32" height="32"/>
                        </ContentLoader> :
                        <>
                            <div className={styles.favorite} onClick={onClickFavorite}>
                                <img src={isFavorite ? "/img/liked.svg" : "/img/un-liked.svg"} alt="Plus"
                                     alt="Unliked"/>
                            </div>
                            <img width='100%' height={130} src={imageUrl} alt=""/>
                            <h5>{title}</h5>
                            <div className="d-flex justify-between align-center">
                                <div className="d-flex flex-column">
                                    <span>Цена:</span>
                                    <b>{price} руб.</b>
                                </div>
                                <img className={styles.plus} onClick={onClickPlus}
                                     src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

export default Card