import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

    const cardData = [
        {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 000 руб.', imageUrl: '/img/sneakers/1.jpg'},
        {name: 'Мужские Кроссовки Nike Air Max 270', price: '13 999 руб.', imageUrl: '/img/sneakers/2.jpg'},
        {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', imageUrl: '/img/sneakers/3.jpg'},
        {name: 'Кроссовки Puma X Aka Boku Future Rider', price: '56 000 руб.', imageUrl: '/img/sneakers/4.jpg'},
        {name: 'Мужские Кроссовки Under Armour Curry 8', price: '12 999 руб.', imageUrl: '/img/sneakers/5.png'},
        {name: 'Мужские Кроссовки Nike Kyrie 7', price: '11 768 руб.', imageUrl: '/img/sneakers/6.jpg'},
        {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: '3 000 руб.', imageUrl: '/img/sneakers/7.jpg'},
        {name: 'Мужские Кроссовки Nike LeBron XVIII', price: '7 678 руб.', imageUrl: '/img/sneakers/8.jpg'},
        {name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: '11 245 руб.', imageUrl: '/img/sneakers/9.jpg'}
];

    return (
        <div className="wrapper clear">
            <Header/>    {/*Компонент Header - Заголовок*/}
            <Drawer/>    {/*Компонент Drawer - Корзина с товарами*/}
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
                    {cardData.map((obj) => (
                        <Card
                        title={obj.name}
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        />  // Компонент Card - Карточка товара
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

