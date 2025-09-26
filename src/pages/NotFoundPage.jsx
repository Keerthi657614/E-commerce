import React from "react";
import { Container, Alert } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="py-5">
      <Alert variant="danger" className="text-center">
        404 - Page Not Found
      </Alert>
    </Container>
  );
};

export default NotFoundPage;
