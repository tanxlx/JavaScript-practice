// Starter template for task.js
let signal = "RED";
switch (signal.toLowerCase()){
    case ("red"):
        console.log("Stop! Wait for green.");
        break;
    case ("yellow"):
        console.log("Slow down and prepare to stop.");
        break;
     case ("green"):
        console.log("Go! Drive safely.");
        break;
    default:
         console.log("Invalid signal color.");
}