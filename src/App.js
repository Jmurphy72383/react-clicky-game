import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Score from './components/Score';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Modal from './components/Modal';
import WinModal from './components/WinModal';
import img from './img.json';


class App extends Component {
  state = {
    img,
    score: 0,
    topScore: 12,
    clicked: [],
    showWinModal: false,
    showLoseModal: false
  };

  setToClicked = (e) => {
    const now = e.target.id
    console.log(now);
    const shuffleObject = img.sort(() => Math.random() - 0.5);
    this.setState({ img: shuffleObject});
    this.setState({ clicked: [...this.state.clicked, now] });
    if(this.state.clicked.includes(now) === true) {
      this.setState({ score: 0, clicked: []});
      this.setState({ showLoseModal: true });
    } else {
      this.setState({ score: this.state.score + 1});
    }
    
  };

  resetGameHandler = () => {
    // window.location.reload();
    this.setState({
      img,
      score: 0,
      clicked: [],
      showLoseModal: false,
      showWinModal: false
    });
  };

  render() {
    return (    
      <div className="App">
        <Nav />
        <Jumbotron />
        <Score score={this.state.score} topScore={this.state.topScore}/>
        {this.state.showLoseModal === true ?
          <Modal resetGameHandler={this.resetGameHandler} /> 
          : null
        }
        {this.state.score === 12 ?
          <WinModal resetGameHandler={this.resetGameHandler} /> 
          : null
        }
        <Wrapper>
          {this.state.img.map(img => (
            <Card image={img.image} shuffleObject={this.setToClicked} key={img.id} id={img.id} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
