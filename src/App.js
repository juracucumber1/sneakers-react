import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// const cardData = [
//     {
//         "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": "12 000 руб.",
//         "imageUrl": "/img/sneakers/1.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Nike Air Max 270",
//         "price": "13 999 руб.",
//         "imageUrl": "/img/sneakers/2.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": "12 999 руб.",
//         "imageUrl": "/img/sneakers/3.jpg"
//     },
//     {
//         "title": "Кроссовки Puma X Aka Boku Future Rider",
//         "price": "56 000 руб.",
//         "imageUrl": "/img/sneakers/4.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Under Armour Curry 8",
//         "price": "12 999 руб.",
//         "imageUrl": "/img/sneakers/5.png"
//     },
//     {
//         "title": "Мужские Кроссовки Nike Kyrie 7",
//         "price": "11 768 руб.",
//         "imageUrl": "/img/sneakers/6.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Jordan Air Jordan 11",
//         "price": "3 000 руб.",
//         "imageUrl": "/img/sneakers/7.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Nike LeBron XVIII",
//         "price": "7 678 руб.",
//         "imageUrl": "/img/sneakers/8.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//         "price": "11 245 руб.",
//         "imageUrl": "/img/sneakers/9.jpg"
//     }
// ];

function App() {

    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://62a61a80b9b74f766a43edf2.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev =>[... prev, obj])
    }

    console.log(cartItems)

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>все кросовки</h1>
                    <div className='search-block d-flex'>
                        <img width={18} height={18} src='/img/search-input.svg' alt="Search"/>
                        <input placeholder='Поиск...'/>
                    </div>
                </div>
                <div
                    className="d-flex flex-wrap">
                    {items.map((items) => (

                        <Card
                            title={items.title}
                            price={items.price}
                            imageUrl={items.imageUrl}
                            onFavorite={() => console.log('Добавили закладки')}
                            onPlus={(obj) => onAddToCart(items)}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;


// 02:02:00 #4