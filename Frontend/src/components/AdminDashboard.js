import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminDashboard.css";
import {
  faHome,
  faArchive,
  faAd,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <div class="bg-blue border-right" id="sidebar-wrapper">
          <div class="sidebar-heading">Admin</div>
          <div class="sidenav list-group list-group-flush">
            <a
              href="/dashboard"
              class="list-group-item list-group-item-action bg-blue"
            >
              <FontAwesomeIcon icon={faHome} /> Dashboard
            </a>
            <a
              href="/product"
              class="list-group-item list-group-item-action bg-blue"
            >
              <FontAwesomeIcon icon={faArchive} /> Product
            </a>
            <a
              href="/promotion"
              class="list-group-item list-group-item-action bg-blue"
            >
              <FontAwesomeIcon icon={faAd} /> Promotion
            </a>
            <a
              href="order"
              class="list-group-item list-group-item-action bg-blue"
            >
              <FontAwesomeIcon icon={faBoxes} /> Order
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>DASHBOARD</h2>
          </nav>
          <div class="container p-4 m-4">
            <div class="row">
              <div class="col-5 radius">
                <h1>Total Sales</h1>
              </div>
              <div class="col-1"></div>
              <div class="col-5 radius">
                <h1>Total Revenue</h1>
              </div>
            </div>
            <div class="row m-4"></div>
            <div class="row">
              <div class="col-5 radius">
                <h1>Top 3 Categories</h1>
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div class="col-1"></div>
              <div class="col-5 radius">
                <h1>Total Brand</h1>
              </div>
            </div>
          </div>

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
export default Sidebar;
