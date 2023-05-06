import React, { useRef, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../context/action/action";
import { decFromCart } from "../../context/action/action";
import { removeFromCart } from "../../context/action/action";
import { DelAllCart } from "../../context/action/action";

const TOKEN = "5825413201:AAE_1GjFvgp8RxEryE9LExveH3zQ8akM0VA";
const CHAT_ID = "1095437279";

// https://api.telegram.org/bot[bot_token]/getUpdates
// https://api.telegram.org/bot[bot_token]/sendMessage?chat_id=[chat_id]

function CartWrapper({ cart }) {
  const dispatch = useDispatch();

  // controlled form | component
  const [name, setName] = useState("");
  // uncontrolled from | component
  const tel = useRef();
  const address = useRef();

  console.log(name);
  console.log(tel);

  const handleSend = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `Ism: <b> ${name} </b> %0A`;
    text += `Tel: ${tel.current.value} %0A`;
    text += `Manzil: ${address.current.value} %0A%0A`;

    cart.forEach((i) => {
      text += `Nomi: ${i.title}%0A`;
      text += `Soni: ${i.soni}%0A`;
      text += `Narxi: ${i.price}%0A%0A`;
    });

    text += `<b>Jami summa: ${cart?.reduce(
      (a, b) => a + b.soni * b.price,
      0
    )} so'm</b>`;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setName("");
    tel.current.value = "";
    address.current.value = "";
    dispatch(DelAllCart());
  };

  return (
    <div className="carts container">
      <div className="cartscontainer">
        <div className="tanlanganlar">
          {cart?.map((e) => (
            <div className="carts__card" key={e.id}>
              <div className="carts__img">
                <img src={e.url} alt="" />
              </div>
              <div className="carts__body">
                <div className="carts__card-title">
                  {e.title.length > 55 ? e.title.slice(0, 55) + "..." : e.title}
                </div>
                <span className="carts__card-monthly">
                  {Math.round((e.price * e.soni * 1.5) / 12)} so'm/oyiga
                </span>
                <div className="carts__btn">
                  <button
                    className="carts__btn1"
                    disabled={e.soni >= 100}
                    onClick={() => dispatch(addToCart(e))}
                  >
                    +
                  </button>
                  <button className="carts__btn1">{e.soni}</button>
                  <button
                    className="carts__btn1"
                    disabled={e.soni <= 1}
                    onClick={() => dispatch(decFromCart(e))}
                  >
                    -
                  </button>
                </div>
                <div className="carts__card-price">
                  <div>
                    <p>{e.price * e.soni} so'm</p>
                  </div>
                </div>
              </div>
              <div className="carts__card-shopping">
                <button onClick={() => dispatch(removeFromCart(e))}>
                  <BsTrash3 />
                </button>
              </div>
              <div className="carts__card-cost">
                <p>{e.soni} ta buyum</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <div className="cart__box">
            <h3 className="cart__title">Rasmiylashtirish</h3>
            <form onSubmit={handleSend} className="cart__form">
              <div>
                <p>Mahsulotlar ta:</p>
                <p>{cart.reduce((a, b) => a + b.soni, 0)}</p>
              </div>
              <div>
                <p>Jami:</p>
                <h3>{cart.reduce((a, b) => a + b.soni * b.price, 0)}so'm</h3>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="cart__formInp"
                placeholder="Name"
              />
              <input
                ref={tel}
                type="number"
                className="cart__formInp"
                placeholder="Tel"
              />
              <input
                ref={address}
                type="text"
                className="cart__formInp"
                placeholder="Adress"
              />
              <button className="cart__formBtn" type="submit">
                Qabul qilish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWrapper;
