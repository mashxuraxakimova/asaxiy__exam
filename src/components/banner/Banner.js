import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

function Banner() {
  return (
    <>
      <div className="nokia">
        <div className="white__div container">
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://4pda.to/s/as6yz0pueAOaLqcgAZTC49W7x2Vm9k9A2PhLJ.jpg?v=1672063818"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://cdn.iconscout.com/icon/free/png-256/free-apple-1496035-1265529.png?f=avif&w=128"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_Acer.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/huawei_logo_icon_170010.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db9ed8c9-b18e-40d7-9b96-eb34d64138e6/dfehbr7-4f2ad896-0b05-42cd-a06b-15c34159d024.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiOWVkOGM5LWIxOGUtNDBkNy05Yjk2LWViMzRkNjQxMzhlNlwvZGZlaGJyNy00ZjJhZDg5Ni0wYjA1LTQyY2QtYTA2Yi0xNWMzNDE1OWQwMjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dIBCPaVd3LwwjN6YXZmReXDxOkhv2Qa1OXjqlYEkLlU"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://techno-shop.kz/upload/iblock/6e8/6e8248263faee3ba5b381ee8c3d4849c.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHicWqrMtbNPFNfjxYAk1Lx9PEEkbVeyHd5WO-t6DbQ&s"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://www.citypng.com/public/uploads/preview/hd-samsung-black-logo-transparent-background-11662412092asszhaol6n.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://smlider.ru/upload/iblock/6e1/6e14e172a7cb114359777f2652bbfc89.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGZJGb3LvlsVYWNxpjdDVUSLSYLM6iGaZg9Gic8FJ&s"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="nokia__image"
                src="https://executiveample.com/wp-content/uploads/2022/01/zeblaze-logo.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="asaxiy__dokon">
        <div className="asaxiy__dokoni container">
          <div className="asaxiy__for__image">
            <img
              className="banner__asaxiy"
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
              alt=""
            />
            <h4>Sizning internet do'koningiz</h4>
            <div className="asaxiy__for__logos">
              <img
                src="https://asaxiy.uz/custom-assets/images/app-store.svg"
                alt=""
              />
              <img
                src="https://asaxiy.uz/custom-assets/images/google-play.svg"
                alt=""
              />
              <img
                src="https://asaxiy.uz/custom-assets/images/app-gallery.svg"
                alt=""
              />
            </div>
          </div>
          <img
            className="asaxiy__phones"
            src="https://asaxiy.uz/custom-assets/images/asaxiy-apps.png"
            alt=""
          />
        </div>
      </div>
      <div className="banner__bottom">
        <div className="banner__white container">
          <div className="banner__white">
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
              alt=""
            />
            <div className="banner__text">
              <h4>Endi bozorga borishga hojat yo'q</h4>
              <h5>Bizda qulay narxlar va uyga yetkazib berish mavjud</h5>
            </div>
          </div>
          <div className="banner__white">
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
              alt=""
            />
            <div className="banner__text">
              <h4>Tez yetkazib berish</h4>
              <h5>Bizning xizmatimiz sizni ajablantiradi</h5>
            </div>
          </div>
          <div className="banner__white">
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/return.svg"
              alt=""
            />
            <div className="banner__text">
              <h4>Siz uchun qulayliklar</h4>
              <h5>
                Nosozliklar yuzaga kelganda tez rasmiylashtirish va qaytarish
                kafolati
              </h5>
            </div>
          </div>
          <div className="banner__white">
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/card.svg"
              alt=""
            />
            <div className="banner__text">
              <h4>Bo'lib to'lash</h4>
              <h5>3, 6, 9 va 12 oy davomida oldindan to'lovsiz</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
