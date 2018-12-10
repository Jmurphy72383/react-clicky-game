import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Score from './components/Score';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import img from './img.json';


class App extends Component {
  state = {
    img,
    score: 0,
    topScore: 0
  };

  shuffleObject = () => {
    img.sort(() => Math.random() - 0.5);
    this.setState({ img });
    this.setState({ score: this.state.score + 1});
    if(this.state.score > 11) {
      this.setState({score: this.state.score - 12});
    }

  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Score score={this.state.score} topScore={this.state.topScore}/>
        <Wrapper>
          {this.state.img.map(img => (
            <Card image={img.image} shuffleObject={this.shuffleObject} key={img.id} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
