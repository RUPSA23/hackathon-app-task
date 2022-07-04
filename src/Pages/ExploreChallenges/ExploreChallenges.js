import React from 'react';
import css from './ExplorChallenges.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

const ExploreChallenges = () => {
    return (
        <div className="explore-challenges">
        <h1>Explore Challenges</h1>
        <>
      <InputGroup className="mb-3 w-50 mx-auto">
        <Form.Control aria-label="Text input with dropdown button" placeholder='Search'/>
        <SplitButton
          variant="outline-secondary"
          title="Filter"
          id="segmented-button-dropdown-2"
          alignRight
        >
          <h6>Status</h6>
          <Dropdown.Item href="#">All</Dropdown.Item>
          <Dropdown.Item href="#">Upcoming</Dropdown.Item>
          <Dropdown.Item href="#">Active</Dropdown.Item>
          <Dropdown.Item href="#">Past</Dropdown.Item>
          <Dropdown.Divider />
          <h6>Level</h6>
          <Dropdown.Item href="#">Easy</Dropdown.Item>
          <Dropdown.Item href="#">Medium</Dropdown.Item>
          <Dropdown.Item href="#">Hard</Dropdown.Item>
        </SplitButton>
      </InputGroup>
    </>
       
            
        </div>
    );
};

export default ExploreChallenges;