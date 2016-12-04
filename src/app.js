import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './components/scoreboard';
import request from 'superagent';
import _ from 'underscore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      round: [],
      score: 0
    };
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(value) {
    let score = this.state.score;
    score = this.state.score + value;
    console.log(score);
    this.setState({score});
  }

  organizeRound(round) {
    let sortedQuestions = round.questions.map((question => {
      question.cat = question.category.name;
      return question;
    }));
    let categoryArray = [];

    sortedQuestions = _.groupBy(sortedQuestions, 'cat');

    this.setState({
      round: sortedQuestions
    });
  }

  componentWillMount() {
    const url = `http://www.trivialbuzz.com/api/v1/rounds/1.json`

    request.get(url, (err,res) => {
      this.organizeRound(res.body.round);
    });
  }

  render() {
    return (
      <div>
        <Scoreboard round={this.state.round} updateScore={this.updateScore} />
        <div className='score'>
          Score: {this.state.score}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
