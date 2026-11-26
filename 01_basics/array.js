let bloodGroup = ["a+", "b+", "o+", "ab+", "a-"];
console.log(bloodGroup[2]);
bloodGroup.push("b-");
console.log(bloodGroup);
bloodGroup.pop("ab-");
console.log(bloodGroup)

const name = ["tanveer", "aadi", "prince"];
const id = [1,2,3];
const nameID = [...name, ...id];
console.log(nameID);

