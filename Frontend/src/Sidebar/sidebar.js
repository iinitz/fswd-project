// import React from "react";
// import { Nav } from "react-bootstrap";
// import { withRouter } from "react-router";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./sidebar.css";
// import {
//   faHome,
//   faArchive,
//   faAd,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Sidebar = (props) => {
//   return (
//     <>
//       <div class="d-flex" id="wrapper">
//         <div class="bg-blue border-right" id="sidebar-wrapper">
//           <div class="sidebar-heading">Admin</div>
//           <div class="sidenav list-group list-group-flush">
//             <a
//               href="/dashboard"
//               class="list-group-item list-group-item-action bg-blue"
//             >
//               <FontAwesomeIcon icon={faHome} /> Dashboard
//             </a>
//             <a
//               href="/product"
//               class="list-group-item list-group-item-action bg-blue"
//             >
//               <FontAwesomeIcon icon={faArchive} /> Product
//             </a>
//             <a
//               href="/promotion"
//               class="list-group-item list-group-item-action bg-blue"
//             >
//               <FontAwesomeIcon icon={faAd} /> Promotion
//             </a>
//             <a
//               href="order"
//               class="list-group-item list-group-item-action bg-blue"
//             >
//               <FontAwesomeIcon icon={faBoxes} /> Order
//             </a>
//           </div>
//         </div>
//         <div id="page-content-wrapper">
//           <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
//             <button class="btn btn-primary" id="menu-toggle">
//               Toggle Menu
//             </button>

//             <button
//               class="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>

//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
//                 <li class="nav-item active">
//                   <a class="nav-link" href="#">
//                     Home <span class="sr-only">(current)</span>
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Link
//                   </a>
//                 </li>
//                 <li class="nav-item dropdown">
//                   <a
//                     class="nav-link dropdown-toggle"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false"
//                   >
//                     Dropdown
//                   </a>
//                   <div
//                     class="dropdown-menu dropdown-menu-right"
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <a class="dropdown-item" href="#">
//                       Action
//                     </a>
//                     <a class="dropdown-item" href="#">
//                       Another action
//                     </a>
//                     <div class="dropdown-divider"></div>
//                     <a class="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </nav>

//           <div class="container-fluid">
//             <h1 class="mt-4">Simple Sidebar</h1>
//             <p>
//               The starting state of the menu will appear collapsed on smaller
//               screens, and will appear non-collapsed on larger screens. When
//               toggled using the button below, the menu will change.
//             </p>
//             <p>
//               Make sure to keep all page content within the{" "}
//               <code>#page-content-wrapper</code>. The top navbar is optional,
//               and just for demonstration. Just create an element with the{" "}
//               <code>#menu-toggle</code> ID which will toggle the menu when
//               clicked.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Sidebar;
