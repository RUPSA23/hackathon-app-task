import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const SingleCard = (props) => {
  const navigate = useNavigate();

    const handleButton = ()  => {
      navigate('/details');
  }

    const { card } = props;
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem", margin: "auto", height: "400px" }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Button variant="warning" size="sm">
         {card.status}
        </Button>
          <Card.Title style={{marginBottom: '10px', marginTop: '10px'}}>{card.title}</Card.Title>
          <Card.Text>
          {card.timeState} 
          </Card.Text>
          <Card.Text>
          {card.time}
          </Card.Text>
          <Button variant="success" onClick={() => handleButton()}>Participate now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
