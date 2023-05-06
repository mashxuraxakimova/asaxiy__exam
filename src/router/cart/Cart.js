import React, { useState } from "react";
import "./Cart.css";
import CartWrapper from "../../components/cart-wrapper/CartWrapper";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";

function Cart() {
  const cart = useSelector((s) => s.cart);
  console.log(cart);
  return (
    <div>
      {cart.length ? (
        <CartWrapper cart={cart} />
      ) : (
        <Empty
          title={"Savatda hozircha mahsulot yoʻq"}
          url="https://uzum.uz/static/img/shopocat.8cee444.png"
          desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        />
      )}
    </div>
  );
}

export default Cart;
