import React from "react";
import Card from "react-bootstrap/Card";

const Aichallenge = (props) => {
  const { challenge } = props;
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{challenge.title}</Card.Title>
          <Card.Text>
           {challenge.description}
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default Aichallenge;
