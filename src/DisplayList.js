import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DisplayItem from './DisplayItem';
import './index.css';

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  addActivity = (item) => {
    this.props.addToAggregateList(item);
    this.props.sumEpisodes();
  }

  render() {
    return (
      <div className="filtered-list">
        {this.props.showsList.map((item) => <DisplayItem item={item} addActivity={this.addActivity} />)}
      </div>
    );
  }
}