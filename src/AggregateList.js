import React from 'react'; 
import AggregateItem from './AggregateItem';
import './index.css';

export default class AggregateList extends React.Component {

  constructor(props) {
    super(props);
  }

  removeShow = (item) => {
    this.props.removeFromAggregateList(item);
    this.props.sumEpisodes();
  }

  render() {
    return (
      <div className="aggregate-display">
        <h4>Favorites</h4>
        <h5>Total episodes: {this.props.total}</h5>
        <div className="aggregate-list">
          {this.props.aggregateList.map((val) => <AggregateItem item={val} 
          subtractFromTotal={this.subtractFromTotal} addToTotal={this.addToTotal} removeShow={this.removeShow} />)}
        </div>
      </div>
    );
  }
}