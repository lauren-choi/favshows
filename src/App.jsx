import React from "react";
import { act } from "react-dom/test-utils";
import './App.css';
import './index.css';
import FilteredList from './FilteredList';
import AggregateList from './AggregateList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      originalList: [...activityList],
      activityList: activityList,
      aggregateList: aggregateList,
    }
  }

  sortAscending = event => {
    let listCopy = this.state.activityList;
    listCopy.sort((a, b) => a.intensity - b.intensity);
    this.setState({
      activityList: listCopy
    });
  }

  sortDescending = event => {
    let listCopy = this.state.activityList;
    listCopy.sort((a, b) => b.intensity - a.intensity);
    this.setState({
      activityList: listCopy
    });
  }

  resetList = event => {
    this.setState({
      activityList: this.state.originalList
    });
  }

  addToAggregateList = (item) => {
    let listCopy = this.state.aggregateList;
    listCopy.push(item);
    this.setState({
      aggregateList: listCopy
    });
  }

  removeFromAggregateList = (item) => {
    let listCopy = this.state.aggregateList;
    const index = listCopy.indexOf(item);
    listCopy.splice(index, 1)
    this.setState({
      aggregateList: listCopy
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mindful</h1>
          <p>For logging hours spent on mindful activities</p>
        </header>
        <div className="main">
          <FilteredList activityList={this.state.activityList} addToAggregateList={this.addToAggregateList} 
          sortAscending={this.sortAscending} sortDescending={this.sortDescending} resetList={this.resetList}/>
          <AggregateList aggregateList={this.state.aggregateList} removeFromAggregateList={this.removeFromAggregateList} />
        </div>
      </div>
    );
  }

}

const activityList = [
  { name: "sleeping", type: "physical", location: "indoors", intensity: 1} ,
  { name: "meditating", type: "mental", location: "both", intensity: 1 },
  { name: "yoga", type: "physical", location: "both", intensity: 2 },
  { name: "breathing exercises", type: "mental", location: "both", intensity: 1 },
  { name: "journaling", type: "mental", location: "both", intensity: 1 },
  { name: "healthy cooking", type: "physical", location: "indoors", intensity: 3 },
  { name: "affirmations", type: "mental", location: "both", intensity: 1 },
  { name: "going on a walk", type: "physical", location: "outdoors", intensity: 3 },
  { name: "arts and crafts", type: "physical", location: "indoors", intensity: 2 },
  { name: "listening to music", type: "physical", location: "indoors", intensity: 2 },
  { name: "socializing", type: "physical", location: "both", intensity: 2 },
  { name: "hiking", type: "physical", location: "outdoors", intensity: 3 },
];

const aggregateList = [];