import React from 'react'; 
import DisplayItem from './DisplayItem';
import './index.css';

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  addShow = (item) => {
    this.props.addToAggregateList(item);
    this.props.sumEpisodes();
  }

  render() {
    return (
      <div className="display-list">
        {this.props.showsList.map((item) => <DisplayItem item={item} addShow={this.addShow} />)}
      </div>
    );
  }
}