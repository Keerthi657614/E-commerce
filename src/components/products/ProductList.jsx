// import React from "react";
// import AdminLayout from "../admin/AdminLayout";
// import { Table, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";

// const ProductList = () => {
//   const products = [
//     { id: 1, name: "Laptop", price: 1200 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Headphones", price: 150 },
//   ];

//   return (
//     <AdminLayout>
//       <Row className="align-items-center mb-3">
//         <Col><h3>Product List</h3></Col>
//         <Col className="text-end">
//           <Button as={Link} to="/add-product" variant="success">
//             <FaPlus className="me-2" /> Add Product
//           </Button>
//         </Col>
//       </Row>

//       <Table striped bordered hover responsive className="shadow-sm">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price ($)</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p) => (
//             <tr key={p.id}>
//               <td>{p.id}</td>
//               <td>{p.name}</td>
//               <td>{p.price}</td>
//               <td>
//                 <Button variant="warning" size="sm" className="me-2">
//                   Edit
//                 </Button>
//                 <Button variant="danger" size="sm">
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </AdminLayout>
//   );
// };

// export default ProductList;
import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];
  return (
    <>
      <Row className="align-items-center mb-3">
        <Col><h3>Product List</h3></Col>
        <Col className="text-end">
          <Button as={Link} to="/admin/add-product" variant="success">
            <FaPlus className="me-2" /> Add Product
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2">
                  <FaEdit /> Edit
                </Button>
                <Button variant="danger" size="sm">
                  <FaTrash /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;