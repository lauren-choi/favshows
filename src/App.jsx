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
      originalList: [...showsList],
      showsList: showsList,
      aggregateList: aggregateList,
      total: 0
    }
  }

  sortSeasonsAscending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => a.seasons - b.seasons);
    this.setState({
      showsList: listCopy
    });
  }

  sortEpisodesAscending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => a.episodes - b.episodes);
    this.setState({
      showsList: listCopy
    });
  }

  sortSeasonsDescending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => b.seasons - a.seasons);
    this.setState({
      showsList: listCopy
    });
  }

  sortEpisodesDescending = event => {
    let listCopy = this.state.showsList;
    listCopy.sort((a, b) => b.episodes - a.episodes);
    this.setState({
      showsList: listCopy
    });
  }

  resetList = event => {
    this.setState({
      showsList: this.state.originalList
    });
  }

  addToAggregateList = (item) => {
    let listCopy = this.state.aggregateList;
    listCopy.push(item);
    this.setState({
      aggregateList: listCopy
    });
  }

  removeFromAggregateList = (item) => {
    let listCopy = this.state.aggregateList;
    const index = listCopy.indexOf(item);
    listCopy.splice(index, 1)
    this.setState({
      aggregateList: listCopy
    });
  }

  sumEpisodes = () => {
    let sum = this.state.aggregateList.reduce((cumulative, show) => cumulative + show.episodes, 0);
    this.setState({
      total: sum
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-watch</h1>
          <p>For creating a list of TV shows to watch</p>
        </header>
        <div className="main">
          <FilteredList showsList={this.state.showsList} addToAggregateList={this.addToAggregateList} 
          sortSeasonsAscending={this.sortSeasonsAscending} sortEpisodesAscending={this.sortEpisodesAscending}
          sortSeasonsDescending={this.sortSeasonsDescending} sortEpisodesDescending={this.sortEpisodesDescending}
          resetList={this.resetList} sumEpisodes={this.sumEpisodes}/>
          <AggregateList total={this.state.total} aggregateList={this.state.aggregateList} 
          removeFromAggregateList={this.removeFromAggregateList} sumEpisodes={this.sumEpisodes}/>
        </div>
      </div>
    );
  }

}

const showsList = [
  {title: "The Office", seasons: 9, episodes: 201, genre: "comedy", status: "complete", image: "https://img.nbc.com/sites/nbcunbc/files/images/2016/1/19/MDot-TheOffice-640x360-MP.jpg"},
  {title: "Black-ish", seasons: 7, episodes: 142, genre: "comedy", status: "ongoing", image: "https://m.media-amazon.com/images/M/MV5BNzU5NDc1YTYtN2JmMS00NjY3LWE0ZTUtMjM4NjVhZjljNjViXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UY1200_CR85,0,630,1200_AL_.jpg"},
  {title: "Emily in Paris", seasons: 1, episodes: 10, genre: "drama", status: "ongoing", image:"https://lh3.googleusercontent.com/proxy/0ayrYonNQkn5uRa_dMZpIec_yzKtnZL_aHQ_yUquhpdoeWKo58xtZs4-vgVySgnJxOpeF4GBQakJA3U_ny8IWwGgRMkV0uYhz2m_mCG_iXBgxJk" },
  {title: "The Crown", seasons: 3, episodes: 30, genre: "drama", status: "ongoing", image:"https://www.dytho.com/wp-content/uploads/2018/10/the-crown.jpg" },
  {title: "Gilmore Girls", seasons: 7, episodes: 153, genre: "drama", status: "complete", image:"https://upload.wikimedia.org/wikipedia/en/2/2c/Gilmore_Girls_Netflix_Poster.jpg" },
  {title: "Black Mirror", seasons: 5, episodes: 22, genre: "thriller", status: "ongoing", image:"https://i5.walmartimages.com/asr/55f744e6-14f6-4456-9703-14afe94c2d94_1.b62d6243a2096524077e9456c16f092f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" },
  {title: "Breaking Bad", seasons: 5, episodes: 62, genre: "thriller", status: "complete", image:"https://i.pinimg.com/originals/05/2f/30/052f30d19625b6a4e9ce5cd19a60fbf7.jpg" },
  {title: "Quantico", seasons: 3, episodes: 57, genre: "thriller", status: "ongoing", image:"https://lh3.googleusercontent.com/proxy/gBonYAIkt-Agb4dH6UJXLebIsQTTUQue_ZE1bPtH6D2VNpgnxTpb05iBnsAk0-TYyOwCrfxQax1y4Psi-JkuGP2MqcFXrW25_YqNjII" },
  {title: "Narcos", seasons: 3, episodes: 30, genre: "thriller", status: "complete", image:"https://www.comingsoon.net/assets/uploads/2015/06/NarcosBanner.png" },
  {title: "Grey's Anatomy", seasons: 16, episodes: 363, genre: "drama", status: "ongoing", image:"https://images-na.ssl-images-amazon.com/images/I/417GfnvPFRL._AC_.jpg" },
  {title: "Schitt's Creek", seasons: 6, episodes: 80, genre: "comedy", status: "complete", image:"https://m.media-amazon.com/images/M/MV5BZTNiMDFlZWItM2FkMi00NjI1LWJiYzQtYmUxN2JmNjcwYWU4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg" },
  {title: "Brooklyn Nine-Nine", seasons: 7, episodes: 143, genre: "comedy", status: "ongoing", image:"https://i.pinimg.com/originals/45/c8/a1/45c8a13fb34846b7e78eecd8bd0a306c.jpg" },
]

const aggregateList = [];