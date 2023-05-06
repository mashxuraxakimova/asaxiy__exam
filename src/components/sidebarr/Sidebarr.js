import React from "react";
import "./Sidebarr.css";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebarr() {
  const navigate = useNavigate();
  return (
    <div className="sidebarr">
      <button onClick={() => navigate("/")}>go home</button>
      <h2>Admin panel</h2>
      <ul>
        <li>
          <NavLink className={"sidebarr__link"} to={"/admin/create-product"}>
            Create Product
          </NavLink>
        </li>
        <li>
          <NavLink className={"sidebarr__link"} to={"/admin/manage-product"}>
            Manage Product
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebarr;
