import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { NavLink } from "react-router-dom";

const AdminOrders = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>ORDERS</h2>
          </nav>

          <NavLink to="/admin/order/:orderId" className="inactive" activeClassName="active" exact={true}>Order Detail</NavLink>
          

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
export default AdminOrders;
