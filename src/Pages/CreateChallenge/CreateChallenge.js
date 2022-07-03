import React from "react";
import Navbar from "../Navbar/Navbar";
import css from "./CreateChallenge.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";

const CreateChallenge = () => {
  return (
    <div className="create-details">
      <Navbar></Navbar>
      <h1>Challenge Details</h1>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Label>Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Label>Level</Form.Label>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Works with selects"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </Form.Select>
          </FloatingLabel>

          <Link to="/" className="button">
            Create Challenge
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default CreateChallenge;
