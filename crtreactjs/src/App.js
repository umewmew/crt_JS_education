import './App.css';
import React from 'react';
import AddButtonItemCart from './components/AddButtonItemCart.js';
import OrderInfo from './components/OrderInfo.js';
// import { useState } from 'react';
 

const ItemCart = ({itemImageSrc, itemName, itemRatingValue, itemCommentAmount, itemPriceCurrent, itemOldPrice, itemBonusAmount, descriptionImage }) => {

  return (
    <div className="itemCart">
      <a className="itemCart__image-link" href="/">
        <img className="itemCart__image" src={itemImageSrc} alt={descriptionImage}></img>
      </a>
      <a className="itemCart__name-link" href="/">
        <h3 className="itemCart__name">{itemName}</h3>
      </a>
      {/* блок отзывы и рейтинг */}
      <div className="itemCart-rating-wrapper">
        <a className="itemCart-rating__value value-link" href="/">{itemRatingValue}</a>
        <a className="itemCart-rating__comment-amount comment-amount-link" href="/">{itemCommentAmount} отзывов</a>
      </div>
      {/* блок с ценами */}
      <div className="itemCart-price-wrapper">
        <span className="itemCart-price__current">{itemPriceCurrent} Р</span>
        <span className="itemCart-price__old">{itemOldPrice}</span>
      </div>

      <span className="itemCart-bonus-amount">+{itemBonusAmount}
      <span className="itemCart-bonus-amount__addition"> Бонусных рублей</span>
      </span>
      <AddButtonItemCart />
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <div className="item-cart-list">
      <ItemCart 
        itemImageSrc="/image/notebookHuawei.webp"
        descriptionImage="Ноутбук HUAWEI"
        itemName="Ноутбук HUAWEI MateBook"
        itemRatingValue="4.2"
        itemCommentAmount="17"
        itemPriceCurrent="69 999"
        itemOldPrice="79 999"
        itemBonusAmount="2 100"
        >
        </ItemCart> 

        <ItemCart 
        itemImageSrc='/image/desctopRombica.webp'
        descriptionImage="Монитор Rombica SkyView"
        itemName="Монитор Rombica SkyView"
        itemRatingValue="4.4"
        itemCommentAmount="19"
        itemPriceCurrent="7 899"
        itemOldPrice="11 799"
        itemBonusAmount="237"
        >
        </ItemCart> 

        <ItemCart 
        itemImageSrc='/image/smartHuawei.webp'
        descriptionImage="Смартфон Huawei nova"
        itemName="Смартфон Huawei nova"
        itemRatingValue="4.6"
        itemCommentAmount="11"
        itemPriceCurrent="15 999"
        itemOldPrice="18 999"
        itemBonusAmount="480"
        >
        </ItemCart> 

        <ItemCart 
        itemImageSrc='/image/TVToshiba.webp'
        descriptionImage="Телевизор Toshiba"
        itemName="Телевизор Toshiba 34c73737"
        itemRatingValue="4.9"
        itemCommentAmount="38"
        itemPriceCurrent="29 999"
        itemOldPrice="39 999"
        itemBonusAmount="900"
        >
        </ItemCart>
      </div>

      <div className="order-info">
        <OrderInfo></OrderInfo>
      </div>

    </div>
  );
}

export default App;
