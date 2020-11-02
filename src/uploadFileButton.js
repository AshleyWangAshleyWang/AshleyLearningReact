import React, { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import styled from "styled-components";
import { outAbstract } from "./dealWithFile";

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

const UploadButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #009578;
  border: 1px solid #000;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
`;

const TransformBtn = styled.button`
margin-left: 20%;
padding: 10px;
color: white;
background-color: #1E90FF;
border: 1px solid #000;
border-radius: 15px;
cursor: pointer;
outline: none;
`

let UploadFileBtnClickEvent = () => {
  const [fileName, setFileName] = useState("default value");
  const [origin, setOrigin] = useState("");

  const handleFiles = (files) => {
    var reader = new FileReader();
    reader.onload = () => {
      setFileName(files[0].name);
      setOrigin(reader.result);
    };
    reader.readAsText(files[0]);
  };

  // Click btn to transform
  const [abstract, setAbstract] = useState('');
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(number);
    setAbstract(outAbstract(origin));
  }, [number]);
  //const [abstract, haveDrugs] = outAbstract(origin);

  return (
    <OutputContainer>
      <div style={{display: "flex"}}>
      <ReactFileReader handleFiles={handleFiles} fileTypes={".txt"}>
        <>
          <UploadButton> Choose A File </UploadButton>
          <span style={{ marginLeft: 9, color: "gray" }}>{fileName}</span>
        </>
      </ReactFileReader>
      <TransformBtn onClick={() => setNumber(number + 1)}>Transform</TransformBtn>
      </div>
      <hr />
      <div style={{ height: "90%" }}>
        <TextArea value={origin}></TextArea>
        <TextArea value={abstract}></TextArea>
      </div>
    </OutputContainer>
  );
};

export default UploadFileBtnClickEvent;
