
import React, { useRef } from "react";

const OrderInfo = () => {
   const textInput = useRef(null);
   function handleClick () {
    textInput.current.focus();
   }

    return (
      <div className="info-input">
        <label className="info-input_label">Введите Ваш email
          <input type="email" name="email" placeholder="email"  />
        </label>

        <label className="info-input_label">Введите Ваш номер телефона
          <input type="tel" name="tel" placeholder="8(800)-000-000"   />
        </label>
          
        <label className="info-input_label">Введите Ваше ФИО
          <input type="text" name="text-info" placeholder="Иван Иванович Иванов" ref={textInput} />
        </label>

        <button type="button" onClick={handleClick}>Фокус на ФИО</button>
        </div>
      );
    };

export default OrderInfo;