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
      </div>
    );
  }
}