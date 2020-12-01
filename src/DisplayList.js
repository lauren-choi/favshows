import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  addActivity = (item) => {
    this.props.addToAggregateList(item);
  }

  render() {
    return (
      <div className="filtered-list">
        {this.props.activityList.map(item => 
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
            <Button variant="primary" onClick={() => this.addActivity(item)}>Add to list</Button>
          </Card.Body>
        </Card>)}
      </div>
    );
  }
}