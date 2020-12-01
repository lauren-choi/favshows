import React from 'react'; 
import DisplayList from './DisplayList';
import NavBar from './NavBar';
import './index.css';

// builds a filtered display of all TV shows
export default class FilteredList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // prop for filtering by genre
      genre: "all",
      // prop for filtering by status
      status: "all",
      // prop for sorting by episode number
      episodesSort: "select",
    }
  }

  // sets genre filter to selected item in navbar
  onSelectFilterGenre = event => {
    this.setState({
      genre: event
    })
  };

  // sets status filter to selected item in navbar
  onSelectFilterStatus = event => {
    this.setState({
      status: event
    })
  };
  
  // applies genre and status filters to the list display
  applyFilters = item => {
    // both filters set to all (default)
    if(this.state.status === "all" && this.state.genre === "all") { 
      return true
      // only the genre filter is selected (status set to default)
    } else if (this.state.status === "all" && this.state.genre !== "all") {
      if (this.state.genre === item.genre) {
        return true
      } else {
        return false
      }
      // only the status filter is selected (genre set to default)
    } else if (this.state.genre === "all" && this.state.status !== "all") {
      if (this.state.status === item.status) {
        return true
      } else {
        return false
      }
      // both the genre and status filters are selected
    } else if (this.state.status === item.status && this.state.genre === item.genre) {
      return true
    } else {
      return false
    }
  }

  // sorts the display of TV shows by number of episodes in each show
  sortEpisodes = event => {
    // set sorting option to selected item in navbar
    this.setState({
      episodesSort: event
    });
    // sorts the display from highest to lowest
    if (event === "descending") {
      this.props.sortEpisodesDescending();
      // sorts the display from lowest to highest
    } else if (event === "ascending") {
      this.props.sortEpisodesAscending();
      // resets the display to unsorted list
    } else {
      this.props.resetList();
    }
  };

  render() {
    return (
      <div className="main">
        <div className="filtered-display">
          {/* navigation bar with filtering and sorting options */}
          <NavBar onSelectFilterGenre={this.onSelectFilterGenre} 
          onSelectFilterStatus={this.onSelectFilterStatus} sortEpisodes={this.sortEpisodes} />
          <div className="filtered-section">
            {/* filtered display of all tv shows */}
            <h4>All TV Shows</h4>
            <DisplayList addEpisodes={this.props.addEpisodes} showsList={this.props.showsList.filter(this.applyFilters)} 
            addToAggregateList={this.props.addToAggregateList} sumEpisodes={this.props.sumEpisodes}/>
          </div>
        </div>
      </div>
    );
  }
}