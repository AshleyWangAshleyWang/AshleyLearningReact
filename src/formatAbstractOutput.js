// Define the format of output content
export const formatAbstractOuput = (list) => {
    var out = ""
    list.forEach(a => {
    out += 
    `
    number: ${a}
    Patient Name: ${a.Name}, Date: ${a.DateTime},
    Medicine:  ${a.MedicalItemCode},
    Days:  ${a.Days}, Medical Part: ${a.MedicalPart}, Usage: ${a.Usage}, Total:  ${a.Total}
    ==================================================================` ;
    })
    return out;
}