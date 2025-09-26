// import React, { useState } from "react";
// import AdminLayout from "../admin/AdminLayout";
// import { Form, Button, Card } from "react-bootstrap";

// const AddProduct = () => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Product "${name}" added!`);
//     setName("");
//   };

//   return (
//     <AdminLayout>
//       <Card className="p-4 shadow">
//         <h3>Add Product</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Product Name</Form.Label>
//             <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
//           </Form.Group>
//           <Button type="submit" variant="success">Add Product</Button>
//         </Form>
//       </Card>
//     </AdminLayout>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const AddProduct = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product "${name}" added!`);
    setName("");
  };
  return (
    <Card className="p-4 shadow">
      <h3><FaPlus className="me-2" />Add Product</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="success">Add Product</Button>
      </Form>
    </Card>
  );
};

export default AddProduct;