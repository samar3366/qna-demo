import React from "react";

import Question from "./Question";

const Questions: React.FC<any> = (props) => {
  const { questions, response, addResponse } = props;

  return (
    <div className="questions-list">
      {questions?.length &&
        questions?.map((question: any, idx: number) => {
          return (
            <Question
              {...{ ...question, sequence: idx + 1, response, addResponse }}
            />
          );
        })}
    </div>
  );
};

export default Questions;
