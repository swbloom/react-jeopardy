import React from 'react';
import Question from './question';


const Category = (props) => {
    const questions = props.questions.map((question) => {
      return <Question
                key={question.id}
                value={question.value}
                body={question.body}
                answer={question.response}
                url={question.url}
                updateScore={props.updateScore} />
    });
    return (
      <div className='category'>
        <p className='category-title'>{props.name.toUpperCase()}</p>
        <ul>
        {questions}
        </ul>
      </div>
    )
}

module.exports = Category;
