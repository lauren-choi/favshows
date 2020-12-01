import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

// a single show in the aggregated favorites display
export default class AggregateItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* card representing the TV show */}
        <Card className="item">
          {/* image corresponding to show */}
          <Card.Img variant="top" src={this.props.item.image} style={styles.cardImage} />
          <Card.Body>
            <Card.Title>{this.props.item.title}</Card.Title>
            <Card.Text>
              Seasons: {this.props.item.seasons}
            </Card.Text>
            <Card.Text>
              Episodes: {this.props.item.episodes}
            </Card.Text>
            <Card.Text>
              Genre: {this.props.item.genre}
            </Card.Text>
            <Card.Text>
              Status: {this.props.item.status}
            </Card.Text>
            {/* button for removing the show from list of aggregated favorites */}
            <Button variant="primary" onClick={() => this.props.removeShow(this.props.item)}>Remove from favorites</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

// styles the image at the top of each card
const styles = {
  cardImage: {
    objectFit: 'cover',
    height: '40%'
  }
}