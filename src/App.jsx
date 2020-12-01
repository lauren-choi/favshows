import React from "react";
import { act } from "react-dom/test-utils";
import './App.css';
import './index.css';
import FilteredList from './FilteredList';
import AggregateList from './AggregateList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      // list of all TV shows
      showsList: [...list],
      // list of aggregated favorite shows
      aggregateList: aggregateList,
      // total number of episodes
      total: 0
    }
  }

  // sorts the list of shows by number of episodes (lowest to highest)
  sortEpisodesAscending = event => {
    // create a copy of the list of shows
    var listCopy = this.state.showsList;
    // sort the copy by number of episodes (ascending) and update the state of
    // the shows list
    listCopy.sort((a, b) => a.episodes - b.episodes);
    this.setState({
      showsList: listCopy
    });
  }

  // sorts the list of shows by number of episodes (highest to lowest)
  sortEpisodesDescending = event => {
    // create a copy of the list of shows
    var listCopy = this.state.showsList;
    // sort the copy by number of episodes (descending) and update the state of
    // the shows list
    listCopy.sort((a, b) => b.episodes - a.episodes);
    this.setState({
      showsList: listCopy
    });
  }

  // resets the list of shows to the original unsorted state
  resetList = event => {
    // create a copy of the original list and update the state of the shows list
    var listCopy = [...list];
    this.setState({
      showsList: listCopy
    });
  }

  // adds a show to the aggregated favorites list
  addToAggregateList = (show) => {
    // check if the aggregated list already includes the show
    if (!this.state.aggregateList.includes(show)) {
      // create a copy of the aggregated list, append the show, then update the state
      let listCopy = this.state.aggregateList;
      listCopy.push(show);
      this.setState({
        aggregateList: listCopy
      });
    }
  }

  // removes a show from the aggregated favorites list
  removeFromAggregateList = (show) => {
    // create a copy of the aggregated list
    let listCopy = this.state.aggregateList;
    // find the index of the show in the list and remove accordingly
    const index = listCopy.indexOf(show);
    listCopy.splice(index, 1)
    // update the state
    this.setState({
      aggregateList: listCopy
    });
  }

  // finds the sum of all the episodes in the aggregated favorites list
  sumEpisodes = () => {
    // sum up the episode value of all objects in the list and update state
    let sum = this.state.aggregateList.reduce((cumulative, show) => cumulative + show.episodes, 0);
    this.setState({
      total: sum
    });
  }

  render() {
    return (
      <div className="App">
        {/* website header */}
        <header className="App-header">
          <h1>FavShows</h1>
          <p>Compile a list of your favorite TV shows + total number of episodes</p>
        </header>
        main website section
        <div className="main">
          {/* left section: includes display of all TV shows and navbar */}
          <FilteredList showsList={this.state.showsList} addToAggregateList={this.addToAggregateList} 
          sortEpisodesAscending={this.sortEpisodesAscending}
          sortEpisodesDescending={this.sortEpisodesDescending}
          resetList={this.resetList} sumEpisodes={this.sumEpisodes}/>
          {/* right section: display of items in aggregated favorites */}
          <AggregateList total={this.state.total} aggregateList={this.state.aggregateList} 
          removeFromAggregateList={this.removeFromAggregateList} sumEpisodes={this.sumEpisodes}/>
        </div>
      </div>
    );
  }

}

// the list of all TV shows
const list = [
  {title: "The Office", seasons: 9, episodes: 201, genre: "comedy", status: "complete", image: "https://img.nbc.com/sites/nbcunbc/files/images/2016/1/19/MDot-TheOffice-640x360-MP.jpg"},
  {title: "Black-ish", seasons: 7, episodes: 142, genre: "comedy", status: "ongoing", image: "https://m.media-amazon.com/images/M/MV5BNzU5NDc1YTYtN2JmMS00NjY3LWE0ZTUtMjM4NjVhZjljNjViXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UY1200_CR85,0,630,1200_AL_.jpg"},
  {title: "Emily in Paris", seasons: 1, episodes: 10, genre: "drama", status: "ongoing", image:"https://www.thefancarpet.com/wp-content/uploads/2020/09/emilyinparisnetflix.jpg" },
  {title: "The Crown", seasons: 3, episodes: 30, genre: "drama", status: "ongoing", image:"https://www.dytho.com/wp-content/uploads/2018/10/the-crown.jpg" },
  {title: "Gilmore Girls", seasons: 7, episodes: 153, genre: "drama", status: "complete", image:"https://upload.wikimedia.org/wikipedia/en/2/2c/Gilmore_Girls_Netflix_Poster.jpg" },
  {title: "Black Mirror", seasons: 5, episodes: 22, genre: "thriller", status: "ongoing", image:"https://i5.walmartimages.com/asr/55f744e6-14f6-4456-9703-14afe94c2d94_1.b62d6243a2096524077e9456c16f092f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" },
  {title: "Breaking Bad", seasons: 5, episodes: 62, genre: "thriller", status: "complete", image:"https://i.pinimg.com/originals/05/2f/30/052f30d19625b6a4e9ce5cd19a60fbf7.jpg" },
  {title: "Quantico", seasons: 3, episodes: 57, genre: "thriller", status: "ongoing", image:"https://lh3.googleusercontent.com/proxy/bi46niNvPVlVv8Cjg_aCLsktFMTuJgP0fdqbQ9JJLV3XUGanpCczYwzUYXsEmxq-ScFQAcnS37pZIELM0fK7uDBXDJXsFUvF" },
  {title: "Narcos", seasons: 3, episodes: 30, genre: "thriller", status: "complete", image:"https://www.comingsoon.net/assets/uploads/2015/06/NarcosBanner.png" },
  {title: "Grey's Anatomy", seasons: 16, episodes: 363, genre: "drama", status: "ongoing", image:"https://images-na.ssl-images-amazon.com/images/I/417GfnvPFRL._AC_.jpg" },
  {title: "Schitt's Creek", seasons: 6, episodes: 80, genre: "comedy", status: "complete", image:"https://m.media-amazon.com/images/M/MV5BZTNiMDFlZWItM2FkMi00NjI1LWJiYzQtYmUxN2JmNjcwYWU4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg" },
  {title: "Brooklyn Nine-Nine", seasons: 7, episodes: 143, genre: "comedy", status: "ongoing", image:"https://i.pinimg.com/originals/45/c8/a1/45c8a13fb34846b7e78eecd8bd0a306c.jpg" },
]

// the aggregated list of favorites
const aggregateList = [];