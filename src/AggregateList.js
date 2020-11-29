import React from 'react'; 
import AggregateItem from './AggregateItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class AggregateList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.subtractTotal = this.subtractTotal.bind(this);
    this.addTotal = this.addTotal.bind(this);
  }

  subtractTotal = () => {
    this.setState({
      total: this.state.total - 1
    });
  }

  addTotal = () => {
    this.setState({
      total: this.state.total + 1
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.total}</p>
        {this.props.list.map((val) => <AggregateItem item={val} 
        subtractTotal={this.subtractTotal} addTotal={this.addTotal} />)}
        {/* {this.props.list.map((item) => <div>
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
              <Button variant="outline-secondary" onClick={this.onSelectDecrease(item)}>-</Button>
                <Card.Text>{item.hours}</Card.Text>
              <Button variant="outline-secondary" onClick={this.onSelectIncrease}>+</Button>
            </ButtonToolbar>
            <Button variant="primary">Remove from list</Button>
          </Card.Body>
        </Card>
      </div>)} */}
      </div>
    );
  }
}