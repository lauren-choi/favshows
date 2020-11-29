import React, { Component } from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class AggregateList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map(item => 
        <Card style ={{ width: '15rem' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Activity type: {item.type}
            </Card.Text>
            <Card.Text>
              Location: {item.location}
            </Card.Text>
            <Card.Text>
              Intensity level: {item.intensity}
            </Card.Text>
            <ButtonToolbar style={{ border: 'light', width: '10rem' }}>
              <Button variant="outline-secondary">-</Button>
              <Card.Text>number</Card.Text>
              <Button variant="outline-secondary">+</Button>
            </ButtonToolbar>
            <Button variant="primary">Remove from list</Button>
          </Card.Body>
        </Card>)}
      </div>
    );
  }
}