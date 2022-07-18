import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// const cardData = [
//
//    +++ ID !!!!!!
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
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://62a61a80b9b74f766a43edf2.mockapi.io/drawer')
            const favoritesResponse = await axios.get('https://62a61a80b9b74f766a43edf2.mockapi.io/Favorite')
            const itemsResponse = await axios.get('https://62a61a80b9b74f766a43edf2.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData();

    }, [])

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://62a61a80b9b74f766a43edf2.mockapi.io/drawer/${obj.id}`);
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post('https://62a61a80b9b74f766a43edf2.mockapi.io/drawer', obj);
            setCartItems(prev => [...prev, obj])
        }
    }


    const onRemoveItem = (id) => {
        axios.delete(`https://62a61a80b9b74f766a43edf2.mockapi.io/drawer/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://62a61a80b9b74f766a43edf2.mockapi.io/Favorite/${obj.id}`)
            } else {
                const {data} = await axios.post('https://62a61a80b9b74f766a43edf2.mockapi.io/Favorite', obj);
                setFavorites(prev => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в закладки');
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <div className="wrapper clear">

            {cartOpened && (
                <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
            )}

            <Header onClickCart={() => setCartOpened(true)}/>

            <Route path="/" exact>
                <Home
                    cartItems={cartItems}
                    items={items}
                    favorites={favorites}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    isLoading={isLoading}
                />
            </Route>

            <Route path="/favorites" exact>
                <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
            </Route>
        </div>

    );
}

export default App;

