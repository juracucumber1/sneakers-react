import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

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
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartClear, setCratClear] = React.useState('')

    React.useEffect(() => {
        axios.get('https://62a61a80b9b74f766a43edf2.mockapi.io/items').then((res) => {
            setItems(res.data)
        })
        axios.get('https://62a61a80b9b74f766a43edf2.mockapi.io/drawer').then((res) => {
            setCartItems(res.data)
        })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://62a61a80b9b74f766a43edf2.mockapi.io/drawer', obj);
        setCartItems(prev => [...prev, obj])
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://62a61a80b9b74f766a43edf2.mockapi.io/drawer/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://62a61a80b9b74f766a43edf2.mockapi.io/Favorite', obj);
        setFavorites(prev => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <div className="wrapper clear">



            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>{searchValue ? `Поиск по запросу:"${searchValue}"` : `Все кросовки`}</h1>
                    <div className='search-block d-flex'>
                        <img width={18} height={18} src='/img/search-input.svg' alt="Search"/>
                        {searchValue &&
                            <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg"
                                 alt="Clear"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
                    </div>
                </div>
                <div
                    className="d-flex flex-wrap">
                    {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item) => (

                        <Card
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />

                    ))}
                </div>
            </div>
        </div>

    );
}

export default App;


// 01:15:00 #5