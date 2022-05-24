import React from 'react';

function Card() {
    return(
        <div className="d-flex">
            <div className="card">
                <div className="favorite">
                    <img src="/img/heart-unliked.svg" alt="Unliked"/>
                </div>
                <img width={133} height={112} src="/img/kros/2.jpg" alt=""/>
                <h5>Nike</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>300руб.</b>
                    </div>
                    <button className="button">
                        <img width={22} height={22} src="/img/add-card.svg" alt="Plus"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Card