// import React from "react";
// import { Container } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white text-center py-3 mt-auto">
//       <Container>
//         <p className="mb-0">© {new Date().getFullYear()} MyApp | All Rights Reserved</p>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p className="mb-0">© {new Date().getFullYear()} MyApp | All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;