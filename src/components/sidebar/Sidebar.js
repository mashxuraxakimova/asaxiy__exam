import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";

function Sidebar() {
  const state = useSelector((s) => s.catalog);
  return (
    <div>
      {/* <div className="Sidebar___content">
        <div className="Sidebar__img">
          <img
            src="https://images.uzum.uz/cgpmip7hj8j9g69ckkqg/t_product_540_high.jpg#1681963680895"
            alt=""
          />
        </div>
        <div className="Sidebar___text">
          <h6>
            Uy va avtomobil uchun havo namlovchi aromadiffuzor yoritgich bilan
            Additionally, children could contribute labor
          </h6>
          <button className="Sidebar___OrderBuy">Order Buy</button>
        </div>
      </div>
      <hr />
      <div className="Sidebar___content">
        <img
          src="https://images.uzum.uz/cgpumr357mg9720edq6g/t_product_540_high.jpg#1681963680897"
          alt=""
        />
        <div className="Sidebar___text">
          <h6>
            Kir yuvish mashinasi va maishiy texnika uchun tebranishga qarshi pol
            stendlari, 4 dona The advantages
          </h6>
          <button className="Sidebar___OrderBuy">Order Buy</button>
        </div>
      </div>
      <hr />
      <div className="Sidebar___content">
        <img
          src="https://images.uzum.uz/cgp4r8ng49devoad67h0/t_product_540_high.jpg#1681963680906"
          alt=""
        />
        <div className="Sidebar___text">
          <h6>
            Pods 3 simsiz sensorli naushniklar, IoS/Android uchun animatsion
            zaryadlash qutisi The oldest artifacts
          </h6>
          <button className="Sidebar___OrderBuy">Order Buy</button>
        </div>
      </div>
      <hr />
      <div className="Sidebar___content">
        <img
          src="https://images.uzum.uz/cgrb6gb57mg9720enklg/t_product_540_high.jpg#1681963680902"
          alt=""
        />
        <div className="Sidebar___text">
          <h6>
            Professional trimmer VGR V-030 soch, soqol va mo'ylovni kesish uchun
            Early on, the internet was seen as
          </h6>
          <button className="Sidebar___OrderBuy">Order Buy</button>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
