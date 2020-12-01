import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './index.css';

export default class AggregateItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      episodes: 0
    }
  }

  render() {
    return (
      <div>
        <Card className="item">
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
            <Button variant="primary" onClick={() => this.props.removeItem(this.props.item)}>Remove from favorites</Button>
          </Card.Body>
        </Card>
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