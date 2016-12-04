import React from 'react';
import Category from './category';
import _ from 'underscore';

const Scoreboard = (props) => {
  let questionArray = [];
  let categories = [];
  let count = 0;

  for (let cat in props.round) {
    if (count < 5) {
      categories.push(<Category name={cat} updateScore={props.updateScore} questions={props.round[cat]} />);
    }
    count++;
  }

  return (
    <div className='categories'>
      {categories}
    </div>
  )
}

module.exports = Scoreboard;
