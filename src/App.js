import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./router/home/Home";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Wishlist from "./router/wishlist/Wishlist";
import SingleRoute from "./router/single-route/SingleRoute";
import Sidebar from "./components/sidebar/Sidebar";
import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";
import Admin from "./router/admin/Admin";
import "./App.css";
import Banner from "./components/banner/Banner";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  // return (
  //   <>
  //     <SearchBar posts={posts} setSearchResults={setSearchResults} />
  //     <ListPage searchResults={searchResults} />
  //   </>
  // );
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <div className="Kompaniya__haqida container">
        <h1>Asaxiy kompaniyasi haqida</h1>
        <h4>
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
          Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
          tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
          texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib
          turish imkonini beradi.
        </h4>
        <h4>
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </h4>
        <ul className="Kompaniya__div container">
          <li className="Kompaniya__div__first">
            <h4>The way how our company works</h4>
          </li>
          <li className="Kompaniya__div__second">
            <h4>Our privileges</h4>{" "}
          </li>
        </ul>
        <div className="Kompaniya__h4">
          <h4>"Asaxiy Books" ООО</h4>
          <h4>Регистрация: 646439</h4>
          <h4>ИНН: 305829008</h4>
          <h4>Директор: Allayev Firuz Abdunasimovich</h4>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
