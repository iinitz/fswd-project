import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { NavLink } from "react-router-dom";


const AdminProducts = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>PRODUCTS</h2>
          </nav>


          <NavLink to="/admin/products/create" className="inactive" activeClassName="active" exact={true}>Create Product</NavLink>
          <NavLink to="/admin/products/:productId" className="inactive" activeClassName="active" exact={true}>Update Product</NavLink>

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
export default AdminProducts;
