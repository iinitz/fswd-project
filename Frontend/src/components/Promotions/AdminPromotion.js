import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { NavLink } from "react-router-dom";

const AdminPromotion = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>PROMOTION</h2>
          </nav>

          
          <NavLink to="/admin/promotion/create" className="inactive" activeClassName="active" exact={true}>Create Promotions</NavLink>
          <NavLink to="/admin/promotion/:promotionId" className="inactive" activeClassName="active" exact={true}>Update Promotions</NavLink>

          <div class="container-fluid">
            <p>
              _________________________________________________________________
              _________________________________________________________________
              _________________________________________________________________
              ____________________________________
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPromotion;
