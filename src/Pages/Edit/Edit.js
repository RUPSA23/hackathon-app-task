import React from "react";
import Navbar from "../Navbar/Navbar";
import css from "./Edit.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import imgae from '../../assets/icons/bi_image-fill.svg';

const CreateChallenge = () => {
  return (
    <div className="create-details">
      <Navbar></Navbar>
      <h1>Challenge Details</h1>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control type="name" defaultValue="Data Sprint 72 - Butterfly Identification"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" defaultValue="17th Jun'22 09:00 PM"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" defaultValue="21st Jun'22 11:00 PM"/>
          </Form.Group>

          <Form.Label>Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" className="mb-3" >
            <Form.Control as="textarea" style={{ height: "100px" }} defaultValue="Identify the class to which each butterfly belongs to"/>
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image  <img src={imgae} alt="" /></Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Label>Level</Form.Label>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Select the level"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </Form.Select>
          </FloatingLabel>

          <Link to="/" className="button">
            Save Changes
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default CreateChallenge;
