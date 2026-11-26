
const name = "Tanveer";
const secoundName = 'bano';
const surname = "Qureshi";

let fullName = "Tanveer"+ "  " +"bano" +" "+ "surname";

console.log(fullName);



//  reverse string 


function reversestring(str){
    return str.split("").reverse().join("");
}
    console.log(reversestring("Tanveer"));




    // how to check index 
/* let studentFullName = "Tanveer_Bano";
console.log(studentFullName.length);
console.log(studentFullName[4]);
console.log(studentFullName.indexOf("r"));

*/



let Name = "takshshila_institude";
console.log(Name.length);
console.log(Name.indexOf("e"));
console.log(Name[5]);



let officeName ="White_fource";
let clean = officeName.trim();

console.log(clean.toUpperCase());
console.log(clean.includes("White"));
console.log(clean.slice(0, 10));
console.log(clean.split(" ").join(" "));
console.log(clean.substring(2 , 5));
console.log(clean.split("_").join(" "));



// Task

let rawInput = "  tanveer_bano  ";
let trimmed = rawInput.trim();
console.log(trimmed);
console.log( trimmed.toUpperCase());
console.log( trimmed.split("_").join(" "));




let city = "   jabalpur   ";
trimmed = city.trim();
 console.log(trimmed);
 console.log(trimmed.toUpperCase());




 ///  ++++++++++++++  SWTICH CASE   +++++++++++++




let monthName = "december";
switch (monthName){
    case "january":
        console.log("december");
    break;

     case "december":
        console.log("december");
        break;
 
    default:
        console.log("invalid month");
    
}  




