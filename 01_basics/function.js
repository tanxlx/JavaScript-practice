function btech(branch1, branch2, branch3) {
    return "course name :" + " " + branch1 + " " + branch2 + " " + branch3;
}
console.log(btech("cse", "ece", "mech"));

function petAnimal(ai , a2 ,a3){
    return "pet Animal name:" +" "+ "cat"+ " " + "dog" + " " +"cow";

}
console.log(petAnimal("cat", "dog", "cow"));




function sorry(times = 20){
    const result = [];
    for (let i = 0;i < times;i++ ) {
        result.push("sorry" + " " + "I am not able to do this task");
    }
    return result;
}
console.log(sorry("100"));

// function with loop 

function num (times = 10){
    const result = [];
    for (let i = 1 ; i <= times; i ++){
        result.push(3 * i);
    }
    return result;
}
console.log(num(10));

// parameter and argument  

function mul (a, b){
    return a * b;
}
console.log(mul(3 ,6));


//Arrow function

const sum = (a, b) =>{
    return a + b;
}
console.log(sum(34 ,67));

