
// Entry pass task
let visitorName = "  Riya  ";
let cleanName = visitorName.trim();

if (cleanName.length === 0) {
    console.log("Name required");
} else {
    console.log("Welcome, " + cleanName);
}

let ticketNumber = 24;

if (ticketNumber % 2 === 0) {
    console.log("Gate A (Even)");
} else {
    console.log("Gate B (Odd)");
}