// import React from "react";
// import AppNavbar from "../common/Navbar";
// import Sidebar from "../common/Sidebar";
// import Footer from "../common/Footer";
// import { Container, Row, Col } from "react-bootstrap";
// import { Outlet } from "react-router-dom";

// const AdminLayout = () => {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <AppNavbar />
//       <Container fluid className="flex-grow-1">
//         <Row className="h-100">
//           <Col xs={12} md={3} lg={2} className="p-0 bg-dark sidebar-col">
//             <Sidebar />
//           </Col>
//           <Col xs={12} md={9} lg={10} className="p-4 bg-light main-content-col">
//             <Outlet />
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default AdminLayout;

// src/layouts/AdminLayout.jsx

import React from "react";
import AppNavbar from "../common/Navbar";
import AdminSidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout-wrapper d-flex flex-column min-vh-100">
      <AppNavbar />
      <Container fluid className="flex-grow-1 d-flex">
        <Row className="flex-grow-1 w-100 g-0"> {/* g-0 removes gutter */}
          <Col xs={12} md={3} lg={2} className="p-0 bg-dark sidebar-col">
            <AdminSidebar />
          </Col>
          <Col xs={12} md={9} lg={10} className="p-4 bg-light main-content-col">
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminLayout;