// Ask the user the first question
let name = prompt("What is your name?");
console.log("Question 1: What is your name?");
console.log("User's response:", name);

// Ask the user the second question
let hometown = prompt("Where is your hometown?");
console.log("Question 2: Where is your hometown?");
console.log("User's response:", hometown);

// Ask the user the third question
let favoriteFood = prompt("What is your favorite food?");
console.log("Question 3: What is your favorite food?");
console.log("User's response:", favoriteFood);

// Ask the user the fourth question
let vacationDestination = prompt("Where is your dream vacation destination?");
console.log("Question 4: Where is your dream vacation destination?");
console.log("User's response:", vacationDestination);

// Construct the response message for the alert
let responseMessage = "Greetings, " + name + " from " + hometown + ", I also like to eat " + favoriteFood + " while on vacation in " + vacationDestination + ".";
alert(responseMessage);
