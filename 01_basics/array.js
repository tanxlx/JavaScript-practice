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


//     MAP ARRAY   


const fruits = ["mango", "apple", "banana"];
fruits.forEach((item , index) => {
    console.log("item:", item);
    console.log("index:", index);
    
});




const student = ["shyam:", "naman:","kajal"];
student.forEach((item , index) =>{
    console.log("item:", item);
    console.log("index:", index);
    console.log(student.length);
});



const ret = [1,2,3,4,5].map((item , index) =>{
    return item + index;


});
console.log(ret);



// FILTER ARRAY

const filterArray = [1,2,3,4,5,6,7,8,9];
const filtered = filterArray.filter((item , index) =>{
    return item % 3 == 0;
});
console.log(filtered);



// fin array 


const variable =[ 22 , 45, 60 ,90 ,100];
const fin = variable.find((item , index) =>
{
    return item % 4 == 0;
});
console.log(fin);

