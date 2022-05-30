import React from 'react';
import styles from './Card.module.scss'

function Card(props) {
    const onClickButton = () => {
        alert(props.title)
    }

    return (
        <div className="d-flex">
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="/img/heart-unliked.svg" alt="Unliked"/>
                </div>
                <img width={133} height={112} src={props.imageUrl} alt=""/>
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{props.price}</b>
                    </div>
                    <button className="button" onClick={onClickButton}>
                        <img width={22} height={22} src="/img/add-card.svg" alt="Plus"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Card