import React from 'react'; 
import AggregateItem from './AggregateItem';

export default class AggregateList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map((item) => <AggregateItem item={this.item}/>)}
      </div>
    );
  }
}