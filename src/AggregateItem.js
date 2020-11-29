import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class AggregateItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 0
    }
    this.onSelectIncrease = this.onSelectIncrease.bind(this);
    this.onSelectDecrease = this.onSelectDecrease.bind(this);
  }

  onSelectIncrease = event => {
    this.setState({
      hours: this.state.hours + 1
    });
    this.props.addTotal();
  }

  onSelectDecrease = event => {
    if (this.state.hours > 0) {
      this.setState({
        hours: this.state.hours - 1
      });
      this.props.subtractTotal();
    }
  }

  render() {
    return (
      <div>
        <Card style ={{ width: '15rem' }}>
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
              Activity type: {this.props.item.type}
            </Card.Text>
            <Card.Text>
              Location: {this.props.item.location}
            </Card.Text>
            <Card.Text>
              Intensity level: {this.props.item.intensity}
            </Card.Text>
            <ButtonToolbar style={{ border: 'light', width: '10rem' }}>
              <Button variant="outline-secondary" onClick={() => this.onSelectDecrease()}>-</Button>
                <Card.Text>{this.state.hours}</Card.Text>
              <Button variant="outline-secondary" onClick={() => this.onSelectIncrease()}>+</Button>
            </ButtonToolbar>
            <Button variant="primary">Remove from list</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}