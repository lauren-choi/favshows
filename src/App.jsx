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
      originalList: [...showsList],
      showsList: showsList,
      aggregateList: aggregateList,
      total: 0
    }
  }

  sortSeasonsAscending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => a.seasons - b.seasons);
    this.setState({
      showsList: listCopy
    });
  }

  sortEpisodesAscending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => a.episodes - b.episodes);
    this.setState({
      showsList: listCopy
    });
  }

  sortSeasonsDescending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => b.seasons - a.seasons);
    this.setState({
      showsList: listCopy
    });
  }

  sortEpisodesDescending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => b.episodes - a.episodes);
    this.setState({
      showsList: listCopy
    });
  }

  resetList = event => {
    this.setState({
      showsList: this.state.originalList
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

  sumEpisodes = () => {
    let sum = this.state.aggregateList.reduce((cumulative, show) => cumulative + show.episodes, 0);
    this.setState({
      total: sum
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-watch</h1>
          <p>For creating a list of TV shows to watch</p>
        </header>
        <div className="main">
          <FilteredList showsList={this.state.showsList} addToAggregateList={this.addToAggregateList} 
          sortSeasonsAscending={this.sortSeasonsAscending} sortEpisodesAscending={this.sortEpisodesAscending}
          sortSeasonsDescending={this.sortSeasonsDescending} sortEpisodesDescending={this.sortEpisodesDescending}
          resetList={this.resetList} sumEpisodes={this.sumEpisodes}/>
          <AggregateList total={this.state.total} aggregateList={this.state.aggregateList} 
          removeFromAggregateList={this.removeFromAggregateList} sumEpisodes={this.sumEpisodes}/>
        </div>
      </div>
    );
  }

}

const showsList = [
  {title: "The Office", seasons: 9, episodes: 201, genre: "comedy", status: "complete"},
  {title: "Black-ish", seasons: 7, episodes: 142, genre: "comedy", status: "ongoing"},
  {title: "Emily in Paris", seasons: 1, episodes: 10, genre: "drama", status: "ongoing"},
  {title: "The Crown", seasons: 3, episodes: 30, genre: "drama", status: "ongoing"},
  {title: "Gilmore Girls", seasons: 7, episodes: 153, genre: "drama", status: "complete"},
  {title: "Black Mirror", seasons: 5, episodes: 22, genre: "thriller", status: "ongoing"},
  {title: "Breaking Bad", seasons: 5, episodes: 62, genre: "thriller", status: "complete"},
  {title: "Quantico", seasons: 3, episodes: 57, genre: "thriller", status: "ongoing"},
  {title: "Narcos", seasons: 3, episodes: 30, genre: "thriller", status: "complete"},
  {title: "Grey's Anatomy", seasons: 16, episodes: 363, genre: "drama", status: "ongoing"},
  {title: "Schitt's Creek", seasons: 6, episodes: 80, genre: "comedy", status: "complete"},
  {title: "Brooklyn Nine-Nine", seasons: 7, episodes: 143, genre: "comedy", status: "ongoing"},
]

const aggregateList = [];