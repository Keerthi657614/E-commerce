// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="container mt-5">
//       <div className="p-5 text-center bg-light rounded-3">
//         <h1 className="mb-3">Welcome to our E-commerce Store!</h1>
//         <p className="mb-3">
//           Explore our wide range of products, from electronics to fashion.
//         </p>
//         <a className="btn btn-primary btn-lg" href="/products" role="button">
//           Shop Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Container, Card } from "react-bootstrap";
import AppNavbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const HomePage = () => (
  <div className="d-flex flex-column min-vh-100">
    <AppNavbar />
    <Container className="py-5 flex-grow-1 d-flex align-items-center justify-content-center">
      <Card className="shadow-lg p-4 rounded-4 text-center" style={{ width: '80%', maxWidth: '600px' }}>
        <h2>Welcome to MyApp</h2>
        <p>Login to access the admin dashboard.</p>
      </Card>
    </Container>
    <Footer />
  </div>
);

export default HomePage;
