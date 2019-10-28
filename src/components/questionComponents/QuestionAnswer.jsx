import React, { useState, useEffect } from "react";
import SearchQuestions from "./SearchQuestions.jsx";
import QASet from "./QASet.jsx";
import MoreQuestions from "./MoreQuestions.jsx";
import AddQuestion from "./AddQuestion.jsx";
import axios from "axios";

export default function QuestionAnswer(props) {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(2);
  let getQuestions = id => {
    axios
      .get(`http://18.223.1.30/qa/${id}/?count=1000`)
      .then(({ data }) => {
        setQuestions(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };
  let updateSearchQs = searchedQuestions => {
    setQuestions(questions.concat(searchedQuestions));
  };
  let showMoreQuestions = () => {
    setCounter(counter + 2);
  };
  let collapseQuestions = () => {
    setCounter(2);
  };
  let moreQsBtn;
  if (questions.length <= 2) {
    moreQsBtn = null;
  } else {
    moreQsBtn = (
      <MoreQuestions
        showCollapse={counter >= questions.length}
        showMoreQuestions={showMoreQuestions}
        collapseQuestions={collapseQuestions}
      />
    );
  }
  useEffect(() => {
    getQuestions(props.productInfo.id);
  }, [props]);

  return (
    <div>
      <div className="q-and-a">
        QUESTIONS & ANSWERS
        <SearchQuestions
          questions={questions}
          updateSearchQs={updateSearchQs}
          setQuestions={setQuestions}
          getQuestions={getQuestions}
          productId={props.productInfo.id}
        />
        <div className="q-and-a-scroll">
          {questions.slice(0, counter).map(question => {
            return (
              <QASet
                key={question.question_id}
                question={question}
                getQuestions={getQuestions}
                product={props.productInfo}
              />
            );
          })}
          {/* <MoreQuestions
            showCollapse={counter >= questions.length}
            showMoreQuestions={showMoreQuestions}
            collapseQuestions={collapseQuestions}
          /> */}
        </div>
        <div className="q-a-buttons">
          {moreQsBtn}
          <AddQuestion
            product={props.productInfo}
            getQuestions={getQuestions}
          />
        </div>
      </div>
    </div>
  );
}
