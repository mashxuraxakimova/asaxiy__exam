import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import { IoIosArrowDown } from "react-icons/io";

function Wishlist() {
  const heart = useSelector((s) => s.heart);
  return (
    <div className="container">
      <div className="sevimlilar">
        <h1 className="Sevimlilar">Sevimlilar</h1>
        <input className="number" type="text" placeholder="12" />{" "}
        <button className="button__small">
          <IoIosArrowDown />
        </button>
        <input
          className="Reyting"
          type="text"
          placeholder="Reyting (yuqorisidan boshlab)"
        />
        <button className="button__small">
          <IoIosArrowDown />
        </button>
      </div>
      <div className="sevimlilar__border"></div>
      {heart.length ? (
        <Products data={heart} />
      ) : (
        <Empty
          title={"Sevimlilar ro'yhati bo'sh"}
          url="https://uzum.uz/static/img/hearts.cf414be.png"
          desc="Bosh sahifaga o'ting va mahsulotdagi yurak belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
        />
      )}
    </div>
  );
}

export default Wishlist;
