import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DisplayList from './DisplayList';
import AggregateList from './AggregateList';
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
          <div className="navigation">
            <h4>Filter by</h4>
            <Nav variant="pills" defaultActiveKey="all" className="navigation-category">
              <Nav.Item className="category">Genre:</Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="all" onSelect={this.onSelectFilterGenre}>All</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="comedy" onSelect={this.onSelectFilterGenre}>Comedy</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="drama" onSelect={this.onSelectFilterGenre}>Drama</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="thriller" onSelect={this.onSelectFilterGenre}>Thriller</Nav.Link></Nav.Item>
            </Nav>
            <Nav variant="pills" defaultActiveKey="all" className="navigation-category">
              <Nav.Item className="category">Status:</Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="all" onSelect={this.onSelectFilterStatus}>All</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="ongoing" onSelect={this.onSelectFilterStatus}>Ongoing</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="complete" onSelect={this.onSelectFilterStatus}>Complete</Nav.Link></Nav.Item>
            </Nav>
            <h4>Sort by</h4>
            <Nav variant="pills" defaultActiveKey="select" className="navigation-category">
              <Nav.Item className="category">Episodes:</Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="select" onSelect={this.sortEpisodes}>Select</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="ascending" onSelect={this.sortEpisodes}>Lowest to Highest</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link eventKey="descending" onSelect={this.sortEpisodes}>Highest to Lowest</Nav.Link></Nav.Item>
            </Nav>
          </div>
          <div className="filtered-section">
            <h4>Activities</h4>
            <DisplayList addEpisodes={this.props.addEpisodes} showsList={this.props.showsList.filter(this.applyFilters)} 
            addToAggregateList={this.props.addToAggregateList} sumEpisodes={this.props.sumEpisodes}/>
          </div>
        </div>
      </div>
    );
  }
}