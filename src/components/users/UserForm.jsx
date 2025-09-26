// import React, { useState } from "react";
// import AdminLayout from "../admin/AdminLayout";
// import { Form, Button, Card } from "react-bootstrap";

// const UserForm = () => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`User "${name}" added!`);
//     setName("");
//   };

//   return (
//     <AdminLayout>
//       <Card className="p-4 shadow">
//         <h3>Add User</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>User Name</Form.Label>
//             <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
//           </Form.Group>
//           <Button type="submit" variant="primary">Add User</Button>
//         </Form>
//       </Card>
//     </AdminLayout>
//   );
// };

// export default UserForm;


import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";

const UserForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User "${name}" added!`);
    setName("");
  };
  return (
    <Card className="p-4 shadow">
      <h3><FaUserPlus className="me-2" />Add User</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="primary">Add User</Button>
      </Form>
    </Card>
  );
};

export default UserForm;