// import React, { useState } from "react";
// import { Form, Button, Card, Container } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
// import { login } from "../../services/authService";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await login(email, password);
//     if (result.success) {
//       navigate("/dashboard");
//     } else {
//       alert(result.message);
//     }
//   };

//   return (
//     <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
//       <Card style={{ width: "400px" }} className="p-4 shadow">
//         <h3 className="text-center mb-4">Login</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </Form.Group>
//           <Button type="submit" variant="dark" className="w-100">Login</Button>
//         </Form>
//         <div className="text-center mt-3">
//           <Link to="/signup">Don’t have an account? Signup</Link>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/authService";
import { FaSignInAlt } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      navigate("/admin/dashboard");
    } else {
      alert(result.message);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4"><FaSignInAlt className="me-2" />Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="dark" className="w-100">Login</Button>
        </Form>
        <div className="text-center mt-3">
          <Link to="/signup">Don’t have an account? Signup</Link>
        </div>
      </Card>
    </Container>
  );
};

export default LoginPage;