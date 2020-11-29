import React, { Component } from 'react'; 
import Nav from 'react-bootstrap/Nav';
import DisplayList from './DisplayList';

export default class FilteredList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "All",
      location: "All",
      intensity: 0
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
        <DisplayList list={this.props.list.filter(this.applyFilters)}/>
      </div>
    );
  }
}