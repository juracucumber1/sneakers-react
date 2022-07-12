import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
            <div className="d-flex align-center">
                    <img width={80} height={80} src="/img/logo-header.png" alt="Logo"/>

                <div>
                    <h3 className="text-uppercase">Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/korzina.svg" alt="Корзина"/>
                    <span>6754руб.</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/test111.svg" alt="Закладки"/>
                    </Link>
                </li>
                <li className="mr-20 cu-p">
                    <img width={18} height={18} src="/img/user.svg" alt="Пользователь"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;