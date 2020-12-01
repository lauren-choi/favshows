import React from 'react'; 
import AggregateItem from './AggregateItem';
import './index.css';

// builds an aggregated display of all favorited TV shows
export default class AggregateList extends React.Component {

  constructor(props) {
    super(props);
  }
  // removes a show from the aggregated favorites list and updates the total number of episodes
  removeShow = (item) => {
    this.props.removeFromAggregateList(item);
    this.props.sumEpisodes();
  }

  render() {
    return (
      <div className="aggregate-display">
        <h4>Favorites</h4>
        {/* indicates the total number of episodes in the aggregated list */}
        <h5>Total episodes: {this.props.total}</h5>
        <div className="aggregate-list">
          {/* creates a list of AggregateItems from aggregateList, each with the removeShow function */}
          {this.props.aggregateList.map((val) => <AggregateItem item={val} 
          subtractFromTotal={this.subtractFromTotal} addToTotal={this.addToTotal} removeShow={this.removeShow} />)}
        </div>
      </div>
    );
  }
}