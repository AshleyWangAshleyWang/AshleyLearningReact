import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import ReadFile from "./reaFile";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 95%;
  width: 48%;
  margin-top: 10px;
  margin-left: 5px;
  padding: 0.5% 0.5%;
  resize: none;
  border: 3px solid black;
`;

const OutputContainer = styled.div`
  height: 92%;
  padding: 20px;
  margin: 0px 1% 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.01);
  background-color: white;
`;

let UploadFileBtnClickEvent = () => {
  const [fileName, setFileName] = useState("default value");

  return (
    <OutputContainer>
      <ReactFileReader handleFiles={ReadFile} fileTypes={".txt"}>
        <>
          <button id="uploadButton" onClick={()=>{setFileName("File is received !")}}>Choose A File</button>
          <span id="custom-text" style={{marginLeft:9, color: "gray"}}>{fileName}</span>
        </>
      </ReactFileReader>
      <hr />
      <div style={{height: "90%" }}>
        <TextArea className="textarea" id="originalOutput"></TextArea>
        <TextArea className="textarea" id="medicineAbstract"></TextArea>
      </div>
    </OutputContainer>
  );
};

export default UploadFileBtnClickEvent;
