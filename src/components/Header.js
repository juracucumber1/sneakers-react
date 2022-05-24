import React from 'react';

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={80} height={80} src="/img/logo-header.png"/>
                <div>
                    <h3 className="text-uppercase">Название</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/korzina.svg"/>
                    <span>6754руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user-header.png"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;