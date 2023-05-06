import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch, FiTruck } from "react-icons/fi";
import { TbDeviceAirpodsCase } from "react-icons/tb";
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineHeart,
} from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BiGlobe } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { DATA } from "../../static";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showed, setShowed] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { pathname } = useLocation();
  if (pathname.includes("admin")) {
    return <></>;
  }

  const handleFilter = (item) => {
    const search = item.target.value;
    const filteredDatas = DATA.filter((value) => {
      return value.target.includes(search);
    });
    search === "" ? setFilteredData([]) : setFilteredData(filteredDatas);
  };

  return (
    <>
      <div className="navbar__fixed">
        <div className="for__navbar">
          <div className="navbar container">
            <NavLink to={"/"} className="nav__logo">
              <span>
                <img
                  className="Uzum"
                  src="https://marketing.uz/uploads/articles/2596/article-original.png"
                  alt=""
                />{" "}
              </span>
            </NavLink>

            <div className="nav__search">
              <input
                type="text"
                placeholder="Qidirish..."
                onChange={handleFilter}
              />
              <button className="qidirish">
                <FiSearch />
                <span>Qidirish</span>
              </button>
              {filteredData.length !== 0 && (
                <div className="search__bar">
                  {filteredData?.map((item) => (
                    <Link
                      className="search__barItem"
                      key={item.id}
                      to={`/product/${item.id}`}
                      state={item}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="nav__links">
              <NavLink to={"/"} className="nav__link">
                <AiOutlineHome />
                <div>Bosh Sahifa</div>
              </NavLink>
              <NavLink to={"/login"} className="nav__link">
                <TbDeviceAirpodsCase />
                <div>To'lov</div>
              </NavLink>
              <NavLink to={"/pro-status"} className="nav__link">
                <FiTruck />
                <div>Trek</div>
              </NavLink>
              <NavLink className="nav__link">
                <BiGlobe />
                <div>English</div>
              </NavLink>
              <NavLink to={"/cart"} className="nav__link">
                <AiOutlineShoppingCart />
                <span className="span__number">
                  <h5>0</h5>{" "}
                </span>
                <div>Savatcha</div>
              </NavLink>
              <NavLink to={"/wishlist"} className="nav__link">
                <AiOutlineHeart />
                <span className="span__number">
                  <h5>0</h5>{" "}
                </span>
                <div>Sevimlilar</div>
              </NavLink>
              <div className="nav__link">
                <span onClick={() => setShow(!show)}>
                  <RxPerson />
                  <div>Kabinet</div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {show && (
          <div className="sidebar">
            <div className="Sidebar___content">
              <div className="Sidebar___text">
                <h1>Home-made Productions</h1>
                <h6>
                  Uy va avtomobil uchun havo namlovchi aromadiffuzor yoritgich
                  bilan Additionally, children could contribute labor Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                  labore rem numquam quam quia, voluptate voluptates optio
                  dignissimos eaque! Maxime magnam, totam corporis veritatis
                  nihil facilis ipsa unde ut iusto voluptatum? Expedita deleniti
                  officiis ex ipsa molestiae, illum sit dolorem earum
                  aspernatur, excepturi dignissimos enim aut soluta cupiditate
                  fugit eveniet nobis neque quaerat exercitationem harum quam
                  fugiat animi provident. Sed doloribus, amet vel maiores
                  praesentium Ipsa maxime non facilis possimus, maiores
                  consequatur ducimus!
                </h6>
                <button className="Sidebar___OrderBuy">Order Buy</button>
              </div>
            </div>
            <hr />
            <div className="Sidebar___content">
              <div className="Sidebar___text">
                <h1>Reservations Accepted</h1>
                <h6>
                  Kir yuvish mashinasi va maishiy texnika uchun tebranishga
                  qarshi pol stendlari, 4 dona The advantages Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Velit fugit, eos
                  repudiandae facere commodi tempora voluptatibus maiores?
                  Tempora nam eius
                </h6>
                <button className="Sidebar___OrderBuy">Order Buy</button>
              </div>
            </div>
            <hr />
            <div className="Sidebar___content">
              <div className="Sidebar___text">
                <h1>All in One Place</h1>
                <h6>
                  Pods 3 simsiz sensorli naushniklar, IoS/Android uchun
                  animatsion zaryadlash qutisi The oldest artifacts Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Recusandae,
                  adipisci id voluptas tempore dolore possimus odit in quasi
                  obcaecati non pariatur enim at amet et nisi aliquid libero
                  quibusdam corrupti voluptatem necessitatibus? Corporis veniam
                  magni libero cupiditate vero excepturi esse repudiandae nemo
                  obcaecati aliquam quaerat consequuntur numquam, sit natus
                  cumque pariatur sint nulla beatae, doloremque optio harum
                  provident est minima culpa? Veritatis, iure impedit! Iusto
                  libero dolorum mollitia optio saepe voluptates, sunt fugiat
                  quam a iure quos blanditiis explicabo. Sit.
                </h6>
                <button className="Sidebar___OrderBuy">Order Buy</button>
              </div>
            </div>
            <hr />
            <div className="Sidebar___content">
              <div className="Sidebar___text">
                <h1>Delivered Right Away</h1>
                <h6>
                  Professional trimmer VGR V-030 soch, soqol va mo'ylovni kesish
                  uchun Early on, the internet was seen as Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Deleniti tempore hic optio
                  iusto distinctio illo, soluta officiis molestiae incidunt vel
                  saepe eveniet obcaecati expedita eligendi possimus, eaque rem
                  vitae commodi neque! Voluptatum, harum ratione, asperiores
                  voluptatibus veniam fugit iste necessitatibus maxime quasi non
                  vel nam expedita at ullam qui quibusdam neque, iusto modi
                  alias a inventore enim. Quas, corrupti consectetur amet dolor
                  libero eligendi maxime enim nam nihil tempora possimus qui
                  dignissimos, nulla quasi facere. Deleniti tenetur
                  exercitationem accusantium vitae rerum blanditiis alias
                  commodi doloremque, debitis minima atque explicabo mollitia,
                  amet facilis? Dolore ratione placeat consectetur esse eos
                  assumenda porro.
                </h6>
                <button className="Sidebar___OrderBuy">Order Buy</button>
              </div>
            </div>
          </div>
        )}
        <div className="navbar__top">
          <IoMdMenu />
          <div onClick={() => setShowed(!showed)}>Barcha bo'limlar</div>

          <div>Chegirmalar</div>
          <div>Yangiliklar</div>
          <div>Yangi kelganlar</div>
          <div>Kitoblar</div>
          <div>Telefon va gadjetlar</div>
          <div>Televizorlar</div>
        </div>
      </div>
      {showed && (
        <div className="setShowed__screen">
          <div className="setShow__tick">
            <TiTick />
            <h5>Uy va avtomobil uchun havo namlovchi</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Har qanday uy jihozlari va buyumlar</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Siz istagan vaqtingizda va narxlarda</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Kuningiz davomida birgalikda ishlaymiz</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Sovg'alar avtomobil uchun havo namlovchi</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Uy va avtomobil uchun havo namlovchi</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Har qanday uy jihozlari va buyumlar</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Siz istagan vaqtingizda va narxlarda</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Kuningiz davomida birgalikda ishlaymiz</h5>
          </div>
          <div className="setShow__tick">
            <TiTick />
            <h5>Sovg'alar avtomobil uchun havo namlovchi</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
