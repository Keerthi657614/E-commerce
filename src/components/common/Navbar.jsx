// import React from "react";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// const AppNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand href="/">MyApp</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/products">Products</Nav.Link>
//             <Nav.Link href="/users">Users</Nav.Link>
//             <NavDropdown title="Account" id="account-dropdown">
//               <NavDropdown.Item href="/login">Login</NavDropdown.Item>
//               <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AppNavbar;
import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { logout, isAuthenticated } from "../../services/authService";

const AppNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to={isLoggedIn ? "/admin/dashboard" : "/"}>
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/admin/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/users">
                  Users
                </Nav.Link>
                <NavDropdown title={<FaUserCircle className="me-1" />} id="account-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>
                    <FaSignOutAlt className="me-1" /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;