import React from 'react';
import cartImg from '../img/cart.png';
import userImg from '../img/user.png';

export default function Base() {
  return (
    <div className="base">
        <header className="base-header">
            <p className="base-logo"><a href="/">FAKE</a></p>
            {/* <form className="base-search-form" action="#">
                <input type="search" placeholder="Text search" />
                <button type="submit">Button</button>
            </form> */}
            <p className="cart-img"><a href="/"><img src={cartImg} alt="Иконка корзины" /></a></p>
            <p className="user-img"><a href="/"><img src={userImg} alt="Иконка пользователя" height="48px"/></a></p>
        </header>
        <main className="content"></main>
        <footer className="base-footer"><p>Для Виду</p></footer>
    </div>
  )
}
