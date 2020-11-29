import React, { Component } from 'react'; 
import Nav from 'react-bootstrap/Nav';
import DisplayList from './DisplayList';

export default class FilteredList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "All",
      location: "both",
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

  render() {
    return (
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link>
            <Nav.Link eventKey="physical" onSelect={this.onSelectFilterType}>Physical</Nav.Link>
            <Nav.Link eventKey="mental" onSelect={this.onSelectFilterType}>Mental</Nav.Link>
          </Nav.Item>
        </Nav>
        <DisplayList list={this.props.list.filter(this.matchesFilterType)}/>
      </div>
    );
  }
}