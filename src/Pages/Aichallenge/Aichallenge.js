import React from "react";
import Card from "react-bootstrap/Card";
import css from "./Aichallenge.css";

const Aichallenge = (props) => {
  const { challenge } = props;
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <Card.Img variant="top" style={{ height: "2rem"}}src={challenge.icon} alt="icon"/>
          <Card.Title>{challenge.title}</Card.Title>
          <Card.Text>
           {challenge.description}
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default Aichallenge;
