import React from 'react'; 
import DisplayItem from './DisplayItem';
import './index.css';

// builds a display of all TV shows
export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  // adds a show to the aggregated favorites list and updates the total number of episodes
  addShow = (item) => {
    this.props.addToAggregateList(item);
    this.props.sumEpisodes();
  }

  render() {
    return (
      <div className="display-list">
        {/* creates a list of DisplayItems from the showsList, each with the addShow function */}
        {this.props.showsList.map((item) => <DisplayItem item={item} addShow={this.addShow} />)}
      </div>
    );
  }
}