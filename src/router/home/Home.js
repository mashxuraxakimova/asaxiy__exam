import React from "react";
import Products from "../../components/products/Products";
import { db } from "../../server";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

function Home() {
  const [data, setData] = React.useState([]);
  const productRef = collection(db, "products");

  React.useEffect(() => {
    const fetchData = async () => {
      const getData = await getDocs(productRef);
      setData(getData.docs.map((i) => ({ ...i.data(), id: i.id })));
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="banner__all container">
        <div className="banner__big">
          <Swiper
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
                src="https://assets.asaxiy.uz/uploads/banner/desktop/6450f95d4948c.jpg.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.asaxiy.uz/uploads/banner/desktop/64536c59035cd.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.asaxiy.uz/uploads/banner/desktop/64520d96cf1b8.jpg.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.asaxiy.uz/uploads/banner/desktop/64477ac5a70d9.jpg.webp"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="banner__small">
          <img
            src="https://assets.asaxiy.uz/uploads/toptoday/mobile/64525f4b4980d.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <Products admin={false} like={true} data={data} />
      </div>
    </>
  );
}

export default Home;
