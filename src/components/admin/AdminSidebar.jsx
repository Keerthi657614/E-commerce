// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const AdminSidebar = () => {
//   return (
//     <div className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
//       <h4 className="mb-4">Admin Dashboard</h4>
//       <Nav className="flex-column">
//         <Nav.Link as={Link} to="/admin" className="text-white">
//           Dashboard
//         </Nav.Link>
//         <Nav.Link as={Link} to="/admin/products" className="text-white">
//           Products
//         </Nav.Link>
//         <Nav.Link as={Link} to="/admin/users" className="text-white">
//           Users
//         </Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default AdminSidebar;


import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBoxes, FaUsers } from 'react-icons/fa'; // Import icons

const AdminSidebar = () => {
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

export default AdminSidebar;