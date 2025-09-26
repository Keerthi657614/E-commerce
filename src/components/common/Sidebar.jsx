// import React from "react";
// import { Nav } from "react-bootstrap";

// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column flex-shrink-0 p-3 bg-light border-end vh-100">
//       <h5 className="text-center">Admin Panel</h5>
//       <Nav className="flex-column mt-3">
//         <Nav.Link href="/admin/dashboard" className="mb-2">📊 Dashboard</Nav.Link>
//         <Nav.Link href="/products" className="mb-2">🛒 Products</Nav.Link>
//         <Nav.Link href="/users" className="mb-2">👥 Users</Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBoxes, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
      <h4 className="mb-4 text-center">Admin Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/admin/dashboard" className="text-white">
          <FaTachometerAlt className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/products" className="text-white">
          <FaBoxes className="me-2" /> Products
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/users" className="text-white">
          <FaUsers className="me-2" /> Users
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;