import DrugComparision from './drugComparisionList';
import { formatAbstractOuput } from "./formatAbstractOutput";
export const outAbstract = (origin) => {

    const lines = origin.split('\n'); //讀進去時把每行切成一小塊

    // 挑選"藥品"相關行，並摘要文字成需要使用的內容
    var responseArray = [];
    var linesWithoutDateAndTimeInfo = "";
    var objectResult = {};
    lines.forEach(line => {
        if (line.includes("Parameter" && "outpatientPrescription")) {
            try{
            linesWithoutDateAndTimeInfo = responseArray.push(JSON.parse(line
                .substring(86)
                .replace("}]", "")
                .replace(/^/, "{")
                .concat("}")
                .replace("}], [NHI_REQUEST, 1.48 WritePrescriptionSign]", "")
                .replace(" [BasicData, {", "")
                .replace(/\s/g,"")));
            } catch (error) {
                console.log(linesWithoutDateAndTimeInfo);
                console.log('error');
            }
        }
    });
    // 篩選出MedicalOrderCategory等於01的列 (此列包含藥品資訊)
    var haveDrugs = responseArray.filter( line => line.MedicalOrderCategory == 1);
    const out = formatAbstractOuput(haveDrugs)

    // Transform MedicalOrderCategory into MedicineName, by drugList.js's content
    // var medicalItemCode = haveDrugs.map( (itemCode)=> {
    //     for (var k = 0; k < Object.keys(drugComparision).length; k++) {
    //         if (itemCode.MedicalItemCode == Object.keys(drugComparision)[k]) {
    //             medicineName = drugComparision[Object.keys(drugComparision)[k]]
    //             break;
    //         }else{
    //             medicineName = itemCode.MedicalItemCode;  // if drugList.js has no this drug, print original MedicalItemCode
    //         }
    //     }
    //     return medicineName;
    // })


    // If has no drugs, print "No drugs are given"
    // if(haveDrugs.length==0){
    //     document.getElementById("medicineAbstract").innerHTML = "No prescription drugs are given today!";
    // }else{
    // document.getElementById("medicineAbstract").innerHTML = out;
    // }

    return out;
}