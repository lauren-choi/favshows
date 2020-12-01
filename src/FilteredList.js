import React from 'react'; 
import DisplayList from './DisplayList';
import NavBar from './NavBar';
import './index.css';

export default class FilteredList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      episodes: "all",
      genre: "all",
      status: "all",
      episodesSort: "select",
    }
  }

  onSelectFilterGenre = event => {
    this.setState({
      genre: event
    })
  };
  
  matchesFilterGenre = item => {
    if(this.state.genre === "all") { 
      return true
    } else if (this.state.genre === item.genre) {
      return true
    } else {
      return false
    }
  }  

  onSelectFilterStatus = event => {
    this.setState({
      status: event
    })
  };
  
  matchesFilterStatus = item => {
    if(this.state.status === "all") { 
      return true
    } else if (this.state.status === item.status) {
      return true
    } else {
      return false
    }
  }  

  applyFilters = item => {
    if(this.state.status === "all" && this.state.genre === "all") { 
      return true
    } else if (this.state.status === "all" && this.state.genre !== "all") {
      if (this.state.genre === item.genre) {
        return true
      } else {
        return false
      }
    } else if (this.state.genre === "all" && this.state.status !== "all") {
      if (this.state.status === item.status) {
        return true
      } else {
        return false
      }
    } else if (this.state.status === item.status && this.state.genre === item.genre) {
      return true
    } else {
      return false
    }
  }

  sortEpisodes = event => {
    this.setState({
      episodesSort: event
    });
    if (event === "descending") {
      this.props.sortEpisodesDescending();
    } else if (event === "ascending") {
      this.props.sortEpisodesAscending();
    } else {
      this.props.resetList();
    }
  };

  render() {
    return (
      <div className="main">
        <div className="filtered-display">
          <NavBar onSelectFilterGenre={this.onSelectFilterGenre} 
          onSelectFilterStatus={this.onSelectFilterStatus} sortEpisodes={this.sortEpisodes} />
          <div className="filtered-section">
            <h4>All TV Shows</h4>
            <DisplayList addEpisodes={this.props.addEpisodes} showsList={this.props.showsList.filter(this.applyFilters)} 
            addToAggregateList={this.props.addToAggregateList} sumEpisodes={this.props.sumEpisodes}/>
          </div>
        </div>
      </div>
    );
  }
}