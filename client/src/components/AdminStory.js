import React from "react";
import Col from "../utils/Col";
import Row from "../utils/Row";

export default function AdminStory({ title, text }) {
  return (
    <div className="mx-4 border rounded">
      <Row>
        <Col>
          <h3>{title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{text}</p>
        </Col>
      </Row>
    </div>
  );
}
