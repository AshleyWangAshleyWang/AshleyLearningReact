import { useState } from "react";
export const TrimNhiLogEVent = (lines) => {
  const [responseArray, setResponseArray] = useState([]);
  const [linesWithoutDateAndTimeInfo, setLinesWithoutDateAndTimeInfo] = "";
  const [objectResult, setObjectResult] = useState({});

    lines.forEach(line => {
    if (line.includes("Parameter" && "outpatientPrescription")) {
      setLinesWithoutDateAndTimeInfo(
        line
          .substring(86)
          .replace("}]", "")
          .replace(/^/, "{")
          .concat("}")
          .replace("}], [NHI_REQUEST, 1.48 WritePrescriptionSign]", "")
          .replace(" [BasicData, {", "")
          .replace(/\s/g, "")
      );
      try {
        setObjectResult(JSON.parse(linesWithoutDateAndTimeInfo)); //將字串轉換成物件
        setResponseArray(responseArray.push(objectResult));
      } catch (error) {
        console.log(linesWithoutDateAndTimeInfo);
        console.log("error"); //可不用寫，只是為了方便確認error內容
      }
    }
  })
  return responseArray,linesWithoutDateAndTimeInfo,objectResult
};