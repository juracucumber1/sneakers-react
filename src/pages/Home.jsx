import React from 'react';
import Card from "../components/Card/Card";

function Home({
                  items,
                  favorites,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToCart,
                  onAddToFavorite
              }) {
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
            <div className="d-flex flex-wrap">
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
    );
}

export default Home;