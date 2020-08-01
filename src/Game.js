import React from "react";

import { suits, values } from "./resources/resources";

class BlackJackGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BlackJackGame: "",
      player: "",
      house: "",
      won: "",
      showDealer: "",
      playerTotal: "",
      houseTotal: "",
      index: 3,
    };
  }

  render() {
    return (
      <div className="App">
        <button className="new-game" onClick={this.onResetGame}>
          Start New Game
        </button>
        {this.state.won === 1 ? (
          <div className="result win">
            <p>You win</p>
          </div>
        ) : this.state.won === 2 ? (
          <div className="result lose">
            <p>You lose</p>
          </div>
        ) : this.state.won === 3 ? (
          <div className="result tie">
            <p>Push/Tie = No winners</p>
          </div>
        ) : undefined}

        {this.state.player ? <h3>Player: </h3> : null}
        <div className="player">
          {this.state.player ? (
            <div className="player">
              <div className="card">
                <p className="number-top">{this.state.player[0].Value}</p>
                <img src={this.state.player[0].Suit}></img>
                <p className="number-bottom">{this.state.player[0].Value}</p>
              </div>
              <div className="card">
                <p className="number-top">{this.state.player[1].Value}</p>
                <img src={this.state.player[1].Suit}></img>
                <p className="number-bottom">{this.state.player[1].Value}</p>
              </div>
            </div>
          ) : null}
          {this.state.index > 3 && this.state.player ? (
            <div className="card">
              <p className="number-top">{this.state.player[2].Value}</p>
              <img src={this.state.player[2].Suit}></img>
              <p className="number-bottom">{this.state.player[2].Value}</p>
            </div>
          ) : null}
          {this.state.index > 4 && this.state.player ? (
            <div className="card">
              <p className="number-top">{this.state.player[3].Value}</p>
              <img src={this.state.player[3].Suit}></img>
              <p className="number-bottom">{this.state.player[3].Value}</p>
            </div>
          ) : null}
          {this.state.index > 5 && this.state.player ? (
            <div className="card">
              <p className="number-top">{this.state.player[4].Value}</p>
              <img src={this.state.player[4].Suit}></img>
              <p className="number-bottom">{this.state.player[4].Value}</p>
            </div>
          ) : null}
          {this.state.index > 6 && this.state.player ? (
            <div className="card">
              <p className="number-top">{this.state.player[5].Value}</p>
              <img src={this.state.player[5].Suit}></img>
              <p className="number-bottom">{this.state.player[5].Value}</p>
            </div>
          ) : null}
          {this.state.index > 7 && this.state.player ? (
            <div className="card">
              <p className="number-top">{this.state.player[6].Value}</p>
              <img src={this.state.player[6].Suit}></img>
              <p className="number-bottom">{this.state.player[6].Value}</p>
            </div>
          ) : null}
          {this.state.index > 8 && this.state.player ? (
            <div className="card">
              <p className="number-top">{this.state.player[7].Value}</p>
              <img src={this.state.player[7].Suit}></img>
              <p className="number-bottom">{this.state.player[7].Value}</p>
            </div>
          ) : null}
        </div>

        {this.state.playerTotal ? (
          <div className="total total-player">
            <p>Player total: {this.state.playerTotal}</p>
          </div>
        ) : null}

        {this.state.house ? <h3>House: </h3> : null}
        <div className="house">
          {this.state.house ? (
            <div className="house">
              <div className="card">
                <p className="number-top">{this.state.house[0].Value}</p>
                <img src={this.state.house[0].Suit}></img>
                <p className="number-bottom">{this.state.house[0].Value}</p>
              </div>
            </div>
          ) : null}
          {this.state.showDealer ? (
            <div className="card">
              <p className="number-top">{this.state.house[1].Value}</p>
              <img src={this.state.house[1].Suit}></img>
              <p className="number-bottom">{this.state.house[1].Value}</p>
            </div>
          ) : null}
        </div>

        {this.state.houseTotal ? (
          <div className="total total-house">
            <p>House total: {this.state.houseTotal}</p>
          </div>
        ) : null}

        {this.state.player && !this.state.won ? (
          <button className="hit" onClick={this.onHitCard}>
            Hit
          </button>
        ) : null}
        {this.state.player ? (
          <button
            className="stick"
            onClick={this.state.BlackJackGame ? this.onShowHouse : null}
          >
            Stick
          </button>
        ) : null}
      </div>
    );
  }

  onGetBlackJackGame = () => {
    let BlackJackGame = [];

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        const card = { Value: values[x], Suit: suits[i] };
        console.log((BlackJackGame = [...BlackJackGame, ...[card]]));
      }
    }
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * BlackJackGame.length);
      let location2 = Math.floor(Math.random() * BlackJackGame.length);
      let tmp = BlackJackGame[location1];

      BlackJackGame[location1] = BlackJackGame[location2];
      BlackJackGame[location2] = tmp;
    }
    return this.setState(
      {
        BlackJackGame: BlackJackGame,
        won: "",
        showDealer: "",
        houseTotal: "",
      },
      this.onGetCards
    );
  };

  onGetCards = () => {
    this.setState(
      {
        player: [this.state.BlackJackGame[0], this.state.BlackJackGame[2]],
        house: [this.state.BlackJackGame[1], this.state.BlackJackGame[3]],
      },
      () => this.onShowPlayerTotal()
    );
  };

  onShowHouse = () => {
    this.setState(
      {
        showDealer: 1,
      },
      () => this.houseTotal()
    );
  };

  onShowPlayerTotal = () => {
    let total = 0;
    this.state.player.map((card) => {
      if (card.Value === "A") {
        total += 11;
      } else if (card.Value === "J") {
        total += 10;
      } else if (card.Value === "Q") {
        total += 10;
      } else if (card.Value === "K") {
        total += 10;
      } else {
        total += parseInt(card.Value, 10);
      }
    });
    if (total > 21) {
      this.setState(
        {
          playerTotal: total,
          won: "",
        },
        this.onAce
      );
    } else {
      this.setState({
        playerTotal: total,
        won: "",
      });
    }
  };

  houseTotal = () => {
    let total = 0;
    this.state.house.map((card) => {
      if (card.Value === "A") {
        total += 11;
        if (total > 21) {
          total -= 10;
        }
      } else if (card.Value === "J") {
        total += 10;
      } else if (card.Value === "Q") {
        total += 10;
      } else if (card.Value === "K") {
        total += 10;
      } else {
        total += parseInt(card.Value, 10);
      }
    });
    return this.setState(
      {
        houseTotal: total,
      },
      this.winner
    );
  };

  winner = () => {
    if (
      this.state.playerTotal > 21 ||
      (this.state.playerTotal < 21 &&
        this.state.houseTotal > this.state.playerTotal)
    ) {
      this.setState({
        won: 2,
      });
    }
    if (
      (this.state.playerTotal <= 21 &&
        this.state.playerTotal > this.state.houseTotal) ||
      this.state.playerTotal === 21
    ) {
      this.setState({
        won: 1,
      });
    }
    if (this.state.playerTotal === this.state.houseTotal) {
      this.setState({
        won: 3,
      });
    }
  };

  onHitCard = () => {
    this.setState(
      {
        player: this.state.player.concat(
          this.state.BlackJackGame[this.state.index]
        ),
        index: this.state.index + 1,
      },
      this.onShowPlayerTotal
    );
  };

  onResetGame = () => {
    this.setState(
      {
        BlackJackGame: "",
        player: "",
        house: "",
        won: "",
        showDealer: "",
        playerTotal: "",
        houseTotal: "",
        index: 3,
      },
      this.onGetBlackJackGame
    );
  };

  onAce = async () => {
    await this.state.player.map((card) => {
      if (card.Value === "A") {
        this.setState({
          playerTotal: this.state.playerTotal - 10,
        });
      }
    });
    if (this.state.playerTotal <= 21) {
      this.setState({
        won: "",
      });
    } else {
      this.setState({
        won: 2,
      });
    }
  };
}

export default BlackJackGame;
