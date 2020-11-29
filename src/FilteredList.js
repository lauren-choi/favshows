import React, { Component } from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DisplayList from './DisplayList';

export default class FilteredList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "All",
      location: "All",
      intensity: 0,
      sort: "Select"
    }
  }

  onSelectFilterType = event => {
    this.setState({
      type: event
    })
  };
  
  matchesFilterType = item => {
    // all items should be shown when no filter is selected
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
    // all items should be shown when no filter is selected
    if(this.state.location === "All") { 
      return true
    } else if (this.state.location === item.location) {
      return true
    } else {
      return false
    }
  }  

  // basically: have a ginormous function that checks all possible conditions
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

  onSelectSort = event => {
    this.setState({
      sort: event
    });
  }

  sortList = list => {
    if (this.state.sort === "ascending") {
      this.setState(prevState => {
        list.sort((a, b) => (a.intensity - b.intensity))
      });
    } else if (this.state.sort == "descending") {
      this.setState(prevState => {
        list.sort((a, b) => (b.intensity - a.intensity))
      });
    } else {
      return
    }
  }

  applyFiltersAndSort = list => {
    list.filter(this.applyFilters)
    this.sortList(list)
    return list
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
          <Dropdown.Item eventKey="select" onSelect={this.onSelectSort}>Select</Dropdown.Item>
          <Dropdown.Item eventKey="ascending" onSelect={this.onSelectSort}>Lowest to Highest</Dropdown.Item>
          <Dropdown.Item eventKey="descending" onSelect={this.onSelectSort}>Highest to Lowest</Dropdown.Item>
        </DropdownButton>
        <DisplayList list={this.applyFiltersAndSort(this.props.list)}/>
      </div>
    );
  }
}