export const formatAbstractOuput = (obj) => {
  var out = "";
  obj.forEach((a, index) => {
    out += `number: ${index+1}
Patient Name: ${a.Name}, Date: ${a.DateTime},
Medicine:  ${a.MedicalItemCode},
Days:  ${a.Days}, Medical Part: ${a.MedicalPart}, Usage: ${a.Usage}, Total:  ${a.Total}
==================================================================
`;
  });
  return out;
};
