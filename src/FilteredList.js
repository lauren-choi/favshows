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
      type: "All",
      location: "All",
      sortState: "Select",
      total: 0,
      aggregate: []
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

  addToAggregate = item => {
    let filteredArray = this.state.aggregate.concat(item)
    this.setState({
      aggregate: filteredArray
    });
  }

  removeFromAggregate = elt => {
    let filteredArray = this.state.aggregate.filter(item => item !== elt.target.value)
    this.setState({
      aggregate: filteredArray
    });
  }

  render() {
    return (
      <div className="main">
        <div className="filtered-display">
          <Nav className="navigation">
            <h4>Filter by</h4>
            <Nav.Item className="navigation-category">
              <Nav.Item>Activity type:</Nav.Item>
              <Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link>
              <Nav.Link eventKey="physical" onSelect={this.onSelectFilterType}>Physical</Nav.Link>
              <Nav.Link eventKey="mental" onSelect={this.onSelectFilterType}>Mental</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navigation-category">
              <Nav.Item>Location:</Nav.Item>
              <Nav.Link eventKey="All" onSelect={this.onSelectFilterLocation}>All</Nav.Link>
              <Nav.Link eventKey="indoors" onSelect={this.onSelectFilterLocation}>Indoors</Nav.Link>
              <Nav.Link eventKey="outdoors" onSelect={this.onSelectFilterLocation}>Outdoors</Nav.Link>
              <Nav.Link eventKey="both" onSelect={this.onSelectFilterLocation}>Both</Nav.Link>
            </Nav.Item>
            <h4>Sort by</h4>
            <Nav.Item className="navigation-category">
              <Nav.Link eventKey="ascending" onSelect={this.onSelectSorting}>Lowest to Highest</Nav.Link>
              <Nav.Link eventKey="descending" onSelect={this.onSelectSorting}>Highest to Lowest</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="filtered-section">
            <h4>Activities</h4>
            <DisplayList list={this.props.list.filter(this.applyFilters)}/>
          </div>
        </div>
        <AggregateList list={this.state.aggregate} />
      </div>
    );
  }
}