import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <Header/>    {/*Компонент Header - Заголовок*/}
            <Drawer/> {/*Компонент Drawer - Корзина с товарами*/}
            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>все кросовки</h1>
                    <div className='search-block d-flex'>
                        <img width={18} height={18} src='/img/search-input.svg' alt="Search"/>
                        <input placeholder='Поиск...'/>
                    </div>
                </div>
                <div
                    className="d-flex">
                    <Card/> {/*Компонент Card - Карточка товара*/}
                    <Card/> {/*Компонент Card - Карточка товара*/}
                    <Card/> {/*Компонент Card - Карточка товара*/}
                    <Card/> {/*Компонент Card - Карточка товара*/}
                </div>
            </div>
        </div>
    );
}

export default App;


