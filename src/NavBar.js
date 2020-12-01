import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import './index.css';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <h4>Filter by</h4>
        <Nav variant="pills" defaultActiveKey="all" className="navigation-category">
          <Nav.Item className="category">Genre:</Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="all" onSelect={this.props.onSelectFilterGenre}>All</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="comedy" onSelect={this.props.onSelectFilterGenre}>Comedy</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="drama" onSelect={this.props.onSelectFilterGenre}>Drama</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="thriller" onSelect={this.props.onSelectFilterGenre}>Thriller</Nav.Link></Nav.Item>
        </Nav>
        <Nav variant="pills" defaultActiveKey="all" className="navigation-category">
          <Nav.Item className="category">Status:</Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="all" onSelect={this.props.onSelectFilterStatus}>All</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="ongoing" onSelect={this.props.onSelectFilterStatus}>Ongoing</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="complete" onSelect={this.props.onSelectFilterStatus}>Complete</Nav.Link></Nav.Item>
        </Nav>
        <h4>Sort by</h4>
        <Nav variant="pills" defaultActiveKey="select" className="navigation-category">
          <Nav.Item className="category">Episodes:</Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="select" onSelect={this.props.sortEpisodes}>Select</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="ascending" onSelect={this.props.sortEpisodes}>Lowest to Highest</Nav.Link></Nav.Item>
          <Nav.Item className="nav-item"><Nav.Link eventKey="descending" onSelect={this.props.sortEpisodes}>Highest to Lowest</Nav.Link></Nav.Item>
        </Nav>
      </div>
    );
  }
}