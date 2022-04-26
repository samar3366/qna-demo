import React, { useState } from "react";

import Questions from "../components/Questions";
import TimeLimit from "../components/TimeLimit";

const data = {
  timeLimit: 20,
  questions: [
    {
      id: 1,
      question: "what is an event loop 1",
      options: ["a", "b", "c", "d"],
    },
    {
      id: 2,
      question: "what is an event loop 2",
      options: ["a", "b", "c", "d"],
    },
    {
      id: 3,
      question: "what is an event loop 3",
      options: ["a", "b", "c", "d"],
    },
    {
      id: 4,
      question: "what is an event loop 4",
      options: ["a", "b", "c", "d"],
    },
  ],
};

const TestLink: React.FC<any> = (props) => {
  const [response, setResponse] = useState([]);

  const addResponse = (questionId: any, option: any) => {
    const updatedResponse: any = data?.questions?.map((question: any) => {
      const prevResponse: any = response?.find(
        (i: any) => i.questionId === question.id
      );

      return {
        questionId: question?.id,
        response: questionId === question?.id ? option : prevResponse?.response,
      };
    });

    setResponse(updatedResponse);
  };

  console.log(response, "response, addResponse");

  return (
    <>
      <TimeLimit {...{ timeLimit: data?.timeLimit, response }} />
      <Questions {...{ questions: data?.questions, response, addResponse }} />
    </>
  );
};

export default TestLink;
