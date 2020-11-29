import React, { Component } from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DisplayList from './DisplayList';
import AggregateList from './AggregateList';

export default class FilteredList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "All",
      location: "All",
      sortState: "Select"
    }
  }

  onSelectFilterType = event => {
    this.setState({
      type: event
    })
  };
  
  matchesFilterType = item => {
    if(this.state.type === "All") { 
      return true
    } else if (this.state.type === item.type) {
      return true
    } else {
      return false
    }
  }  

  onSelectFilterLocation = event => {
    this.setState({
      location: event
    })
  };
  
  matchesFilterLocation = item => {
    if(this.state.location === "All") { 
      return true
    } else if (this.state.location === item.location) {
      return true
    } else {
      return false
    }
  }  

  applyFilters = item => {
    if(this.state.location === "All" && this.state.type === "All") { 
      return true
    } else if (this.state.location === "All" && this.state.type !== "All") {
      if (this.state.type === item.type) {
        return true
      } else {
        return false
      }
    } else if (this.state.type === "All" && this.state.location !== "All") {
      if (this.state.location === item.location) {
        return true
      } else {
        return false
      }
    } else if (this.state.location === item.location && this.state.type === item.type) {
      return true
    } else {
      return false
    }
  }

  onSelectSorting = event => {
    this.setState({
      sortState: event
    })
  };

  sortAscending = (a, b) => {
    this.props.list.sort((a, b) => b.intensity - a.intensity)
  }

  sortDescending = (a, b) => {
    this.props.list.sort((a, b) => a.intensity - b.intensity)
  }



  render() {
    return (
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link>
            <Nav.Link eventKey="physical" onSelect={this.onSelectFilterType}>Physical</Nav.Link>
            <Nav.Link eventKey="mental" onSelect={this.onSelectFilterType}>Mental</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="All" onSelect={this.onSelectFilterLocation}>All</Nav.Link>
            <Nav.Link eventKey="indoors" onSelect={this.onSelectFilterLocation}>Indoors</Nav.Link>
            <Nav.Link eventKey="outdoors" onSelect={this.onSelectFilterLocation}>Outdoors</Nav.Link>
            <Nav.Link eventKey="both" onSelect={this.onSelectFilterLocation}>Both</Nav.Link>
          </Nav.Item>
        </Nav>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item eventKey="ascending" onSelect={this.onSelectSorting}>Lowest to Highest</Dropdown.Item>
          <Dropdown.Item eventKey="descending" onSelect={this.onSelectSorting}>Highest to Lowest</Dropdown.Item>
        </DropdownButton>
        <DisplayList list={this.props.list.filter(this.applyFilters).sort(
          (a, b) => this.state.sortState === "ascending" ? this.sortAscending(a, b) : this.sortDescending(a, b))}/>
        <AggregateList list={this.props.list} />
      </div>
    );
  }
}