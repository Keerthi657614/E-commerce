// import React from "react";
// import AdminLayout from "../admin/AdminLayout";
// import { Table, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";

// const UserList = () => {
//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//     { id: 3, name: "Alice Johnson", email: "alice@example.com" },
//   ];

//   return (
//     <AdminLayout>
//       <Row className="align-items-center mb-3">
//         <Col><h3>User List</h3></Col>
//         <Col className="text-end">
//           <Button as={Link} to="/add-user" variant="primary">
//             <FaPlus className="me-2" /> Add User
//           </Button>
//         </Col>
//       </Row>

//       <Table striped bordered hover responsive className="shadow-sm">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u.id}>
//               <td>{u.id}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
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

// export default UserList;
import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  ];
  return (
    <>
      <Row className="align-items-center mb-3">
        <Col><h3>User List</h3></Col>
        <Col className="text-end">
          <Button as={Link} to="/admin/add-user" variant="primary">
            <FaPlus className="me-2" /> Add User
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
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

export default UserList;