import React from 'react';
import './Game.css';
import ChoiceImgButton from "./ChoiceImgButton"
import ButtonPlay from "./ButtonPlay"
import Stats from "./Stats"
import stone from "../img/kamień.png"
import paper from "../img/papierm.png"
import scizzors from "../img/nożyce.png"
class Game extends React.Component {
  state = {
    options: [
      { id: 0, name: 'kamien', src: stone, active: false },
      { id: 1, name: 'papier', src: paper, active: false },
      { id: 2, name: 'nozyce', src: scizzors, active: false } 
    ],
    playerChoice: null,
    aiChoice: null,
    gameStats: []
  }
  getAiChoice = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const aiChoice = this.state.options[index].name
    this.setState({
      aiChoice
    })
  }
  handleClick = (name) => {
    let playerChoice = null
    const options = this.state.options.map(option => {
      option.active = false;
      if (option.name === name) {
        option.active = true;
        playerChoice = option.name;
      }
      return option
    })
    this.setState({
      options,
      playerChoice
    })
    this.getAiChoice()
  }
  playRound = () => {
    const { playerChoice: player, aiChoice: bot, gameStats: prevStats, options: prevOptions } = this.state;
    const result = this.checkResult(player, bot);
    const gameStat = {
      player,
      bot,
      result
    }
    const gameStats = [...prevStats, gameStat]
    const options = prevOptions.map(option => {
      option.active = false;
      return option
    })
    this.setState({
      gameStats,
      aiChoice: null,
      playerChoice: null,
      options
    })
  }
  checkResult = (player, bot) => {
    if (player === bot) return "draw";
    if (player === "kamien") {
      if (bot === "nozyce") return "win"
      return 'loose'
    }
    if (player === "papier") {
      if (bot === "kamien") return "win"
      return 'loose'
    }
    if (player === "nozyce") {
      if (bot === "papier") return "win"
      return 'loose'
    }
  }
  render() {
    const { options, gameStats, playerChoice } = this.state;
    const choices = options.map(choice => <ChoiceImgButton data={choice} key={choice.id} click={this.handleClick} />)
    return (
      <>
        <div className="choiceBox">{choices}</div>
        <ButtonPlay active={playerChoice} click={this.playRound} />
        {gameStats.length ? < Stats stats={gameStats} /> : null}
      </>
    );
  }
}

export default Game;
