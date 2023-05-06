import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";

function Footer() {
  const { pathname } = useLocation();

  if (pathname.includes("admin")) {
    return <></>;
  }
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <ul>
            <li>
              <h2>Ma'lumotlar</h2>
              <h4>Ko'p so'raladigan savollar</h4>
              <h4>Olib ketish punktlari</h4>
              <h4>Blog</h4>
              <h4>Ommaviy oferta (Foydalanuvchi bitimi)</h4>
              <h4>Muddatli toʻlov asosida sotib</h4>{" "}
              <h4>Olishning umumiy qoidalari</h4>
              <h4>Biz haqimizda</h4>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Biz bilan aloqa</h2>
              <h4>
                <FaPhoneAlt />
                +998 71 200 01 05
              </h4>
              <h4>
                <RxEnvelopeClosed />
                info@asaxiy.uz
              </h4>
              <h4>
                {" "}
                <GrLocation />
                ​Islom Karimov, 49, Toshkent
              </h4>
              <h2>Kitob do'konlarimiz</h2>
              <h4>
                <GrLocation />
                Asaxiy Novza
              </h4>
              <h4>
                <GrLocation />
                Asaxiy Farhod bozori
              </h4>
              <h4>
                <GrLocation />
                Asaxiy Panorama, Kitob olami
              </h4>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Erishgan yutuqlarimiz</h2>
              <h4>"Tahsin" mukofoti</h4>
              <h4>"Shuhrat" medali</h4>
              <h4>"Kelajak bunyodkori" medali</h4>
              <h2>Biz ijtimoiy tarmoqlarda</h2>
              <FaFacebook />
              <FaTelegram />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
            </li>
          </ul>

          <ul>
            <li>
              <h2>To'lov turlari</h2>
            </li>
            <div className="footer__logos">
              <div className="for__each__logo">
                <img
                  src="https://asaxiy.uz/custom-assets/images/uzum.svg"
                  alt=""
                />
              </div>
              <div className="for__each__logo">
                <img
                  src="https://asaxiy.uz/custom-assets/images/payme.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="footer__logos">
              <div className="for__each__logo">
                <img
                  src="https://asaxiy.uz/custom-assets/images/visa.svg"
                  alt=""
                />
              </div>
              <div className="for__each__logo">
                <img
                  src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="footer__logos">
              <div className="for__each__logo">
                <img
                  src="https://asaxiy.uz/custom-assets/images/humo.svg"
                  alt=""
                />
              </div>
              <div className="for__each__logo">
                <img
                  src="https://asaxiy.uz/custom-assets/images/uzcard.svg"
                  alt=""
                />
              </div>
            </div>
          </ul>
        </div>

        <h4 className="footer__btmText">
          2015-2023 Internet-do’kon asaxiy.uz: Maishiy texnikalar va
          boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga
          oshiriladi. Barcha huquqlar himoyalangan.
        </h4>
      </div>
    </div>
  );
}

export default Footer;
