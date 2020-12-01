import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }

  addActivity = (item) => {
    this.props.addToAggregateList(item);
    this.props.sumEpisodes();
  }

  render() {
    return (
      <div className="filtered-list">
        {this.props.showsList.map(item => 
        <Card className="item">
          <Card.Img variant="top" src={item.image} style={styles.cardImage} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Seasons: {item.seasons}
            </Card.Text>
            <Card.Text>
              Episodes: {item.episodes}
            </Card.Text>
            <Card.Text>
              Genre: {item.genre}
            </Card.Text>
            <Card.Text>
              Status: {item.status}
            </Card.Text>
            <Button variant="primary" onClick={() => this.addActivity(item)}>Add to list</Button>
          </Card.Body>
        </Card>)}
      </div>
    );
  }
}

const styles = {
  cardImage: {
    objectFit: 'cover',
    height: '40%'
  }
}