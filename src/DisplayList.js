import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filtered-list">
        {this.props.list.map(item => 
        <Card className="filtered-item">
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
            <Button variant="primary">Add to list</Button>
          </Card.Body>
        </Card>)}
      </div>
    );
  }
}