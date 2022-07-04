import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from 'react-bootstrap/Button';
import css from "./Details.css"

const Details = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Details">
        <h5>Starts on 17th June'22 09:00 PM (India Standard Time)</h5>
        <h2>Data Sprint 72 - Butterfly Identification</h2>
        <h6>Identify the class to which each butterfly belongs to</h6>
        <Button variant="light">Easy</Button>{' '}  
      </div>
      <div className="overview">
      <div><h4>Overview</h4></div>
        <div><Button href="#" variant="success" className="edit-button">Edit</Button>
        <Button  variant="outline-danger">Delete</Button></div>
      </div>
      <div className="paragraph">
        <p>Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.</p>
      </div>
    </div>
  );
};

export default Details;
