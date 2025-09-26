// import React from "react";
// import { Card, Form, Button } from "react-bootstrap";
// import { FaEdit } from "react-icons/fa";

// // Placeholder component for updating a product.
// const UpdateProduct = () => {
//   return (
//     <Card className="p-4 card-glass">
//       <h3 className="text-info mb-4"><FaEdit className="me-2" /> Update Product</h3>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter new product name" required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Price</Form.Label>
//           <Form.Control type="number" placeholder="Enter new price" required />
//         </Form.Group>
//         <Button type="submit" variant="info">Update Product</Button>
//       </Form>
//     </Card>
//   );
// };

// export default UpdateProduct;


import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { updateProduct } from '../../api/productApi';

function UpdateProduct({ id }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, { name, price });
  };

  return (
    <Container>
      <h2>Update Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={e => setName(e.target.value)} required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={price} onChange={e => setPrice(e.target.value)} required/>
        </Form.Group>
        <Button type="submit" variant="warning">Update</Button>
      </Form>
    </Container>
  );
}

export default UpdateProduct;
