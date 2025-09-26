// import React, { useState } from "react";
// import { Form, Button, Card, Container } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";

// const SignupPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     alert("User registered successfully (dummy)!");
//     navigate("/login");
//   };

//   return (
//     <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
//       <Card style={{ width: "400px" }} className="p-4 shadow">
//         <h3 className="text-center mb-4">Signup</h3>
//         <Form onSubmit={handleSignup}>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </Form.Group>
//           <Button type="submit" variant="primary" className="w-100">Signup</Button>
//         </Form>
//         <div className="text-center mt-3">
//           <Link to="/login">Already have an account? Login</Link>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default SignupPage;


import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("User registered successfully (dummy)!");
    navigate("/login");
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4"><FaUserPlus className="me-2" />Signup</h3>
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Signup</Button>
        </Form>
        <div className="text-center mt-3">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </Card>
    </Container>
  );
};

export default SignupPage;