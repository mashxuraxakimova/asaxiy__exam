import React from "react";
import "./Products.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineDelete,
} from "react-icons/ai";
import { DATA } from "../../static";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToHeart,
  removeFromHeart,
  addToCart,
} from "../../context/action/action";
import { db } from "../../server";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";

function Products({ data, admin, setRefresh }) {
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart);

  const handleDeletePro = async (id) => {
    if (window.confirm("are you sure")) {
      await deleteDoc(doc(db, "products", id))
        .then()
        .catch()
        .finally(() => setRefresh((p) => !p));
    }
  };
  return (
    <div className="products container">
      {data?.map((e) => (
        <div className="pro__card" key={e.id}>
          <div className="pro__img">
            <Link to={`/product/${e.id}`} state={e}>
              <img src={e.url} alt="" />
            </Link>
            {heart?.some((i) => i.id === e.id) ? (
              <AiFillHeart onClick={() => dispatch(removeFromHeart(e))} />
            ) : (
              <AiOutlineHeart onClick={() => dispatch(addToHeart(e))} />
            )}
          </div>
          <div className="pro__body">
            <div className="pro__card-title">
              {e.title.length > 55 ? e.title.slice(0, 55) + "..." : e.title}
            </div>
            <span className="pro__card-monthly">
              {Math.round((e.price * 1.5) / 12)} so'm/oyiga
            </span>
            <div className="pro__card-price">
              <div>
                <del>{e.price * 1.2} so'm</del>
                <p>{e.price} so'm</p>
              </div>
              {admin ? (
                <button
                  onClick={() => handleDeletePro(e.id)}
                  className="pro__card-shopping"
                >
                  <AiOutlineDelete />
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addToCart(e))}
                  className="pro__card-shopping"
                >
                  <AiOutlineShoppingCart />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
