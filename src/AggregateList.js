import React from 'react'; 
import AggregateItem from './AggregateItem';
import './index.css';

export default class AggregateList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  subtractFromTotal = (hours) => {
    this.setState({
      total: this.state.total - hours
    });
  }

  addToTotal = (hours) => {
    this.setState({
      total: this.state.total + hours
    });
  }

  removeItem = (item, hours) => {
    this.subtractFromTotal(hours);
    this.props.removeFromAggregateList(item);
  }

  render() {
    return (
      <div className="aggregate-display">
        <h4>Total hours: {this.state.total}</h4>
        <div className="aggregate-list">
          {this.props.aggregateList.map((val) => <AggregateItem item={val} 
          subtractFromTotal={this.subtractFromTotal} addToTotal={this.addToTotal} removeItem={this.removeItem} />)}
        </div>
      </div>
    );
  }
}