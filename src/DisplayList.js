import React, { Component } from 'react'; 

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map(item => <li>{item.name}, {item.type}</li>)}
      </div>
    );
  }
}