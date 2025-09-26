// import React from "react";
// import AdminLayout from "./AdminLayout";
// import { Card, Row, Col, Badge, ListGroup } from "react-bootstrap";
// import { FaBox, FaUsers, FaDollarSign, FaChartLine, FaShoppingCart } from "react-icons/fa";

// const Dashboard = () => {
//   return (
//     <AdminLayout>
//       <h2 className="mb-4">Dashboard</h2>

//       {/* Summary Cards */}
//       <Row className="mb-4">
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaBox size={40} className="text-primary me-3" />
//               <div>
//                 <Card.Title className="mb-1">Total Products</Card.Title>
//                 <h4>20</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaUsers size={40} className="text-success me-3" />
//               <div>
//                 <Card.Title className="mb-1">Total Users</Card.Title>
//                 <h4>10</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaDollarSign size={40} className="text-warning me-3" />
//               <div>
//                 <Card.Title className="mb-1">Revenue</Card.Title>
//                 <h4>$5000</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaChartLine size={40} className="text-danger me-3" />
//               <div>
//                 <Card.Title className="mb-1">Sales Growth</Card.Title>
//                 <h4>+12%</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Detail Section */}
//       <Row>
//         <Col lg={8} className="mb-4">
//           <Card className="shadow-sm border-0">
//             <Card.Header className="bg-white border-bottom">
//               <h5 className="mb-0">Recent Orders</h5>
//             </Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 #1234 - Laptop
//                 <Badge bg="primary" pill>Shipped</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 #1235 - Phone
//                 <Badge bg="warning" pill>Pending</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 #1236 - Headphones
//                 <Badge bg="success" pill>Delivered</Badge>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>

//         <Col lg={4} className="mb-4">
//           <Card className="shadow-sm border-0">
//             <Card.Header className="bg-white border-bottom">
//               <h5 className="mb-0">Top Selling Products</h5>
//             </Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 Laptop <Badge bg="info" pill>10 sold</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 Phone <Badge bg="info" pill>8 sold</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 Headphones <Badge bg="info" pill>5 sold</Badge>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </AdminLayout>
//   );
// };

// export default Dashboard;
// import React from "react";
// import { Card, Row, Col, Badge, ListGroup } from "react-bootstrap";
// import { FaBox, FaUsers, FaDollarSign, FaChartLine, FaShoppingCart } from "react-icons/fa";

// const Dashboard = () => {
//   return (
//     <>
//       <h2 className="mb-4">Dashboard</h2>
//       <Row className="mb-4">
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaBox size={40} className="text-primary me-3" />
//               <div>
//                 <Card.Title className="mb-1">Total Products</Card.Title>
//                 <h4>20</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaUsers size={40} className="text-success me-3" />
//               <div>
//                 <Card.Title className="mb-1">Total Users</Card.Title>
//                 <h4>10</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaDollarSign size={40} className="text-warning me-3" />
//               <div>
//                 <Card.Title className="mb-1">Revenue</Card.Title>
//                 <h4>$5000</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-3">
//           <Card className="shadow-sm border-0 h-100">
//             <Card.Body className="d-flex align-items-center">
//               <FaChartLine size={40} className="text-danger me-3" />
//               <div>
//                 <Card.Title className="mb-1">Sales Growth</Card.Title>
//                 <h4>+12%</h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col lg={8} className="mb-4">
//           <Card className="shadow-sm border-0">
//             <Card.Header className="bg-white border-bottom">
//               <h5 className="mb-0">Recent Orders</h5>
//             </Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 #1234 - Laptop
//                 <Badge bg="primary" pill>Shipped</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 #1235 - Phone
//                 <Badge bg="warning" pill>Pending</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 #1236 - Headphones
//                 <Badge bg="success" pill>Delivered</Badge>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//         <Col lg={4} className="mb-4">
//           <Card className="shadow-sm border-0">
//             <Card.Header className="bg-white border-bottom">
//               <h5 className="mb-0">Top Selling Products</h5>
//             </Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 Laptop <Badge bg="info" pill>10 sold</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 Phone <Badge bg="info" pill>8 sold</Badge>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between align-items-center">
//                 Headphones <Badge bg="info" pill>5 sold</Badge>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Card, Row, Col, Badge, ListGroup } from "react-bootstrap";
import { FaBox, FaUsers, FaDollarSign, FaChartLine, FaShoppingCart } from "react-icons/fa";
import { Search, Filter, ArrowUpDown, Plus, Eye, Edit, Trash2 } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [products] = useState([
    { id: 1, name: "MacBook Pro 16-inch", category: "Laptops", price: 2499, stock: 15, status: "In Stock", rating: 4.8, sales: 120, description: "Latest MacBook Pro with M2 chip", image: "https://via.placeholder.com/300x200", supplier: "Apple Inc.", lastUpdated: "2024-01-15" },
    { id: 2, name: "iPhone 15 Pro", category: "Smartphones", price: 999, stock: 5, status: "Low Stock", rating: 4.9, sales: 200, description: "Latest iPhone with titanium design", image: "https://via.placeholder.com/300x200", supplier: "Apple Inc.", lastUpdated: "2024-01-14" },
    { id: 3, name: "Sony WH-1000XM5", category: "Audio", price: 399, stock: 0, status: "Out of Stock", rating: 4.7, sales: 85, description: "Premium noise-canceling headphones", image: "https://via.placeholder.com/300x200", supplier: "Sony Corporation", lastUpdated: "2024-01-13" },
    { id: 4, name: "Samsung Galaxy Tab S9", category: "Tablets", price: 799, stock: 25, status: "In Stock", rating: 4.6, sales: 60, description: "Professional Android tablet", image: "https://via.placeholder.com/300x200", supplier: "Samsung Electronics", lastUpdated: "2024-01-12" }
  ]);

  const [orders] = useState([
    { id: "#ORD-001", customer: "John Doe", amount: 2499, status: "Shipped", date: "2024-01-15", items: 1 },
    { id: "#ORD-002", customer: "Jane Smith", amount: 1398, status: "Processing", date: "2024-01-15", items: 2 },
    { id: "#ORD-003", customer: "Mike Johnson", amount: 799, status: "Delivered", date: "2024-01-14", items: 1 },
    { id: "#ORD-004", customer: "Sarah Wilson", amount: 999, status: "Pending", date: "2024-01-14", items: 1 }
  ]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'in-stock' && product.stock > 10) ||
      (filterStatus === 'low-stock' && product.stock <= 10 && product.stock > 0) ||
      (filterStatus === 'out-of-stock' && product.stock === 0);
    return matchesSearch && matchesStatus;
  });

  const getOrderStatusBadge = (status) => {
    const variants = {
      'Delivered': 'success',
      'Shipped': 'info',
      'Processing': 'warning',
      'Pending': 'secondary'
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  return (
    <>
      <h2 className="mb-4">Dashboard Overview</h2>
      <Row className="mb-4 g-4">
        <Col lg={3} md={6} sm={12}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex align-items-center">
              <FaBox size={40} className="text-primary me-3" />
              <div>
                <Card.Title className="text-muted mb-1">Total Products</Card.Title>
                <h4 className="fw-bold">20</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex align-items-center">
              <FaUsers size={40} className="text-success me-3" />
              <div>
                <Card.Title className="text-muted mb-1">Total Users</Card.Title>
                <h4 className="fw-bold">10</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex align-items-center">
              <FaDollarSign size={40} className="text-warning me-3" />
              <div>
                <Card.Title className="mb-1">Revenue</Card.Title>
                <h4 className="fw-bold">$5,000</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex align-items-center">
              <FaChartLine size={40} className="text-danger me-3" />
              <div>
                <Card.Title className="mb-1">Sales Growth</Card.Title>
                <h4 className="fw-bold text-danger">+12%</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-4">
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-white border-bottom">
              <h5 className="mb-0"><FaShoppingCart className="me-2" /> Recent Orders</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {orders.map((order) => (
                <ListGroup.Item key={order.id} className="d-flex justify-content-between align-items-center">
                  #{order.id.split('-')[1]} - {order.customer} - ${order.amount.toLocaleString()}
                  {getOrderStatusBadge(order.status)}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-white border-bottom">
              <h5 className="mb-0"><FaBox className="me-2" /> Top Selling Products</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {products.sort((a,b) => b.sales - a.sales).slice(0, 3).map((product) => (
                <ListGroup.Item key={product.id} className="d-flex justify-content-between align-items-center">
                  {product.name} <Badge bg="info" pill>{product.sales} sold</Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;