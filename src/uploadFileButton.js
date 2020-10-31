import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import styled from "styled-components";
import DrugComparision from "./drugComparisionList";
import {formatAbstractOuput} from "./formatAbstractOutput";
import TrimNhiLogEVent from "./TrimNhiLog";

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
`


let UploadFileBtnClickEvent = () => {
  const [fileName, setFileName] = useState("default value");
  const [origin, setOrigin] = useState("");
  const [abstract, setAbstract] = useState("");

  const handleFiles = (files) => {
    var reader = new FileReader();
    reader.onload = () => {
      setFileName(files[0].name);

      //READ EVERY LINE
      var lines = reader.result.split("\n"); //讀進去時把每行切成一小塊

      // 挑選"藥品"相關行，並摘要文字成需要使用的內容
      var responseArray = [];
      lines.forEach(line => {
        var linesWithoutDateAndTimeInfo = "";
        var objectResult = {};
        if (line.includes("Parameter" && "outpatientPrescription")) {
          linesWithoutDateAndTimeInfo = line
            .substring(86)
            .replace("}]", "")
            .replace(/^/, "{")
            .concat("}")
            .replace("}], [NHI_REQUEST, 1.48 WritePrescriptionSign]", "")
            .replace(" [BasicData, {", "")
            .replace(/\s/g, "");
          try {
            objectResult = JSON.parse(linesWithoutDateAndTimeInfo); //將字串轉換成物件
            responseArray.push(objectResult);
          } catch (error) {
            console.log(linesWithoutDateAndTimeInfo);
            console.log("error"); //可不用寫，只是為了方便確認error內容
          }
        }
      })
      // 篩選出MedicalOrderCategory等於01的列 (此列包含藥品資訊)
      var haveDrugs = responseArray.filter(line => line.MedicalOrderCategory == 1);

      // // Transform MedicalOrderCategory into MedicineName, by drugList.js's content
      // var medicalItemCode = haveDrugs.map( (itemCode)=> {
      //     for (var k = 0; k < Object.keys(DrugComparision).length; k++) {
      //         if (itemCode.MedicalItemCode == Object.keys(DrugComparision)[k]) {
      //             var medicineName = DrugComparision[Object.keys(DrugComparision)[k]]
      //             break;
      //         }else{
      //             medicineName = itemCode.MedicalItemCode;  // if drugList.js has no this drug, print original MedicalItemCode
      //         }
      //     }
      //     return medicineName;
      // })
      setAbstract(formatAbstractOuput(haveDrugs));

      setOrigin(reader.result);
    };
    reader.readAsText(files[0]);
  };

  return (
    <OutputContainer>
      <ReactFileReader handleFiles={handleFiles} fileTypes={".txt"}>
        <>
          <UploadButton> Choose A File </UploadButton>
          <span style={{ marginLeft: 9, color: "gray" }}>{fileName}</span>
        </>
      </ReactFileReader>
      <hr />
      <div style={{ height: "90%" }}>
        <TextArea value={origin}></TextArea>
        <TextArea value={abstract}></TextArea>
      </div>
    </OutputContainer>
  );
};

export default UploadFileBtnClickEvent;
