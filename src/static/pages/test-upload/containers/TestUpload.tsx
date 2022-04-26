import React, { useState } from "react";
import { Input } from "reactstrap";

import "./TestUpload.scss";

const TestUpload: React.FC<any> = (props) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [userName, setUserName] = useState("");
  const [timeLimit, setTimeLimit] = useState<any>(null);
  const [fileContent, setFileContent] = useState<any>(null);
  const extractText = (file: any) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      setFileContent(event.target.result);
    };
    reader.readAsText(file);
  };

  const onSubmit = () => {
    console.log({
      userName,
      timeLimit,
      fileContent,
    });
  };

  return (
    <div className="test-upload-container">
      <div className="test-upload">
        <Input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e: any) => setUserName(e?.target?.value ?? "")}
        />
        <Input
          type="number"
          placeholder="Time Limit in Seconds"
          value={timeLimit}
          onChange={(e: any) => setTimeLimit(e?.target?.value ?? null)}
        />
        <input
          type="file"
          value={selectedFile}
          onChange={(e: any) => {
            extractText(e?.target?.files[0]);
          }}
        />
        <button onClick={() => onSubmit()}>Submit Log file</button>

        <button>Get Log file</button>
      </div>
    </div>
  );
};

export default TestUpload;
