import React from 'react';
import Card from "../components/Card/Card";

function Home({
                  items,
                  cartItems,
                  favorites,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCart,
                  isLoading,
              }) {

    const renderItems = () => {
        const filtredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? Array(4).fill(<Card loading={isLoading}/>) : filtredItems).map((item, index) => (

            <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                loading={isLoading}
            />
        ))
    }
    return (
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
            <div className="d-flex flex-wrap">{renderItems()}</div>
        </div>
    );
}

export default Home;