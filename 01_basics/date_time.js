
let newDate = new Date();
console.log(newDate);


let weekDate = new Date(2023,3 ,23);
console.log(weekDate);
console.log(weekDate.toISOString());
console.log(weekDate.toLocaleDateString());

console.log(weekDate.getFullYear());
console.log(weekDate.getMonth());
const day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday",];
console.log(day[weekDate.getDay()]);
