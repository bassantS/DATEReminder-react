import React from "react";
import { Row, Col } from "react-bootstrap";

const DateActions = ({ deleteData, onView }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deleteData} className="btn btn-primary p-2">
          مسح الكل
        </button>
        <button onClick={onView} className="btn btn-primary">
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
};

export default DateActions;
