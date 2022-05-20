function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className='mb-30 d-flex justify-between'>Корзина <img className="removeBtn cu-p"
                                                                              src="/img/btn-remove.svg" alt="Remove"/>
                    </h2>

                    <div className="items">

                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{backgroundImage: 'url(/img/kros/4.jpg)'}}
                                className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>

                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{backgroundImage: 'url(/img/kros/1.jpg)'}}
                                className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>122 999 руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>

                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{backgroundImage: 'url(/img/kros/4.jpg)'}}
                                className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб. </b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
                    </div>

                </div>
            </div>


            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={80} height={80} src="/img/logo-header.png"/>
                    <div>
                        <h3 className="text-uppercase">Кросыs</h3>
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
            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>Кросовки</h1>
                    <div className='search-block d-flex'>
                        <img width={18} height={18} src='/img/search-input.svg' alt="Search"/>
                        <input placeholder='Поиск...'/>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/heart-unliked.svg" alt="Unliked"/>
                        </div>
                        <img width={133} height={112} src="/img/kros/1.jpg" alt=""/>
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


                    <div className="card">
                        <img width={133} height={112} src="/img/kros/2.jpg" alt=""/>
                        <h5>NikeNike</h5>
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


                    <div className="card">
                        <img width={133} height={112} src="/img/kros/3.jpg" alt=""/>
                        <h5>NikeNikeNike</h5>
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


                    <div className="card">
                        <img width={133} height={112} src="/img/kros/4.jpg" alt=""/>
                        <h5>Nike Nike Nike</h5>
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
            </div>
        </div>
    );
}

export default App;


