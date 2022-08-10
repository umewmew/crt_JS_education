import React, { useState } from 'react';

const AddButtonItemCart = ({itemAddBtnBacket, itemAddBtnFavorite, itemAddBtnCompare}) => {
    const [addFavorite, setAddFavorite] = useState(false);

  return (
    <div className="itemCart-addBtn-wrapper">
          {/* кнопка "добавить в корзину" */}
        <button className="itemCart-addBtn addBtn-backet" type="button">
          <img src={"/image/icon/basket-icon.svg"} alt={"Добавить"}></img>
          {itemAddBtnBacket}
        </button>

        {/* кнопка "добавить в избранное" */}
        <button className={"itemCart-addBtn addBtn-favorite" + ( addFavorite? " add-succes" : " ")} type="button" 
            onClick={() => setAddFavorite(!addFavorite)}>
          {/* <img src={"/image/icon/icon-favorite.svg"} alt={"Добавить"}></img> */}
          {itemAddBtnFavorite}
        </button>

        {/* кнопка "добавить в сравнение" */}
        <button className="itemCart-addBtn addBtn-compare"  type="button">
          <img src={"/image/icon/compare.svg"} alt={"Добавить"}></img>
          {itemAddBtnCompare}
        </button>
      </div>
  )
};

export default AddButtonItemCart;