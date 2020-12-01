import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './index.css';

export default class AggregateItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 0
    }
  }

  onSelectIncrease = event => {
    this.setState({
      hours: this.state.hours + 1
    });
    this.props.addToTotal(1);
  }

  onSelectDecrease = event => {
    if (this.state.hours > 0) {
      this.setState({
        hours: this.state.hours - 1
      });
      this.props.subtractFromTotal(1);
    }
  }

  render() {
    return (
      <div>
        <Card className="aggregate-item">
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
            <ButtonToolbar className="button-toolbar">
              <Button variant="outline-secondary" onClick={() => this.onSelectDecrease()}>-</Button>
                <Card.Text className="count">{this.state.hours}</Card.Text>
              <Button variant="outline-secondary" onClick={() => this.onSelectIncrease()}>+</Button>
            </ButtonToolbar>
            <Button variant="primary" onClick={() => this.props.removeItem(this.props.item, this.state.hours)}>Remove from list</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}