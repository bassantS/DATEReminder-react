import React from "react";
import { Row, Col } from "react-bootstrap";

const DateCounts = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="mb-2">
        لديك {person.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default DateCounts;
