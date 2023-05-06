import React, { useRef, useState } from "react";
import "../Admin.css";
import { db } from "../../../server";
import { collection, addDoc } from "firebase/firestore";

// collection = array
function CreateProduct() {
  const title = useRef();
  const price = useRef();
  const url = useRef();
  const [loading, setLoading] = useState(false);

  const productRef = collection(db, "products");

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    let newPro = {
      title: title.current.value,
      price: +price.current.value,
      url: url.current.value,
    };
    await addDoc(productRef, newPro)
      .then((res) => {
        console.log(res);
        // setTitle("")
        title.current.value = "";
        price.current.value = "";
        url.current.value = "";
      })
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  };
  return (
    <div className="create__pro">
      <h2>CreateProduct</h2>
      <form onSubmit={handleCreate} action="">
        <input ref={title} required type="text" placeholder="title" />
        <input ref={price} required type="number" placeholder="price" />
        <input ref={url} required type="text" placeholder="url" />
        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Create product"}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
