import React from "react";
import { Input } from "reactstrap";

const Question: React.FC<any> = (props) => {
  const { sequence, id, question, options, response, addResponse } = props;

  const value = response?.find((i: any) => i.questionId === id);

  return (
    <div className="question">
      <h3>
        {sequence}: {question}
      </h3>
      <div className="options-list">
        {options?.length &&
          options?.map((option: any) => {
            return (
              <span>
                <Input
                  type="radio"
                  checked={value?.response === option}
                  onClick={() => addResponse(id, option)}
                />
                {option}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
