// <!-- ///////////////////////////////////////////////////// chap 8 - 11 ///////////////////////////////////////////////////////////////////////////-->
//   // 1)
//   var a = prompt("write your name:");
//   alert("hi, " + a);

//   // 2)
//   var a = +prompt("enter a number");
//   document.getElementById("abc").innerHTML = a;

//   if (a != 0) {
//     for (var i = 1; i <= 10; i++) {
//       document.write(a + " x " + i + " = " + a * i + "<br>");
//     }
//   } else {
//     for (var i = 0; i <= 10; i++) {
//       document.write(5 + " x " + i + " = " + 5 * i + "<br>");
//     }
//   }

// //   3)
// var a=prompt("enter a city name: ");

// console.log(a);
// if(a=="Karachi"){
//     alert( "welcome to the city of lights");
// }
// else if(a=="Islamabad"){
//     alert( "welcome to the city of burgers");
// }
// else if(a=="Lahore"){
//     alert( "welcome to the city of GAdhas");
// }
// else{
//     alert("wrong value entered!!");
// }

// // 4
// var a= prompt("enter your gender");
// if (a == "m"){
//     alert("gm sir");
// }
// else     if (a == "f"){
//     alert("gm ma'am");
// }

// // 5
// var a= prompt("enter your color");
// if (a == "yellow"){
//     alert("vehicles should get ready to move");
// }
// else     if (a == "green"){
//     alert("vehicles can move now");
// }
// else if(a== "red"){
//     alert("stop")
// }

// // 6
// var a= +prompt("enter age");
// if (a>=18){
//     alert("welcome");
// }
// else{
//     alert("nikal");
// }

// // 7

// var a= +prompt("enter fuel");
// if (a>=0.25){
//     alert("drive");
// }
// else{
//     alert("refil");
// }

// 8
// // a
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

// // b
// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// // e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// // e
// if("car" < "cat"){
//  alert("car is smaller than cat");
// }

// // 9
// var a = +prompt("eneter the obtain marks");
// var b = 300;
// var percent = (a / b) * 100;
// c = percent.toFixed(2);

// if (c >= 80 && c <= 100) {
//   document.write("Total marks: 300" + "<br>");
//   document.write("marks obtained: " + a + "<br>");
//   document.write("Percentage: " + c + "% <br>");
//   document.write("Grade: A-one <br>");
//   document.write("Remarks: Exellent");
// }
// else if (c >= 70 && c <= 80) {
//   document.write("Total marks: 300" + "<br>");
//   document.write("marks obtained: " + a + "<br>");
//   document.write("Percentage: " + c + "% <br>");
//   document.write("Grade: A <br>");
//   document.write("Remarks: Good");
// }
// else if (c >= 60 && c <= 70) {
//   document.write("Total marks: 300" + "<br>");
//   document.write("marks obtained: " + a + "<br>");
//   document.write("Percentage: " + c + "% <br>");
//   document.write("Grade: B <br>");
//   document.write("Remarks: you need to improve");
// }
// else if (c >= 0 && c <= 60) {
//   document.write("Total marks: 300" + "<br>");
//   document.write("marks obtained: " + a + "<br>");
//   document.write("Percentage: " + c + "% <br>");
//   document.write("Grade: fail <br>");
//   document.write("Remarks: sorry");
// }

// // 10
// var a = prompt("enter the name of item 1: ");
// var b = prompt("enter the name of item 2: ");
// var c = +prompt("enter the price of item 1: ");
// var d = +prompt("enter the price of item 2: ");
// var e = +prompt("enter the quantity of item 1: ");
// var f = +prompt("enter the quantity of item 2: ");
// var g = +prompt("enter the Shippig charges: ");

// document.write("price of " + a + " is: " + c + "<br>");
// document.write("quantity of " + a + "is: " + e + "<br>");
// document.write("price of " + b + "is: " + d + "<br>");
// document.write("quantity of " + b + "is: " + f + "<br>");

// document.write("shipping charges:" + g + "<br>");
// var total = c * e + d * f + g;
// document.write("total cost of your order is: " + total + "<br>");
// var discount = total * (10 / 100);
// if (total >= 2000) {
//   document.write("Discounted price is " + (total - discount));
// }
// document.write("");
// document.write("");
// document.write("");

// // 11
// var a = +prompt("enter your guess");
// var b = Math.floor(Math.random() * 10) + 1;

// // b = 2;
// console.log(b);
// if (b == a) {
//   document.write("BINGO!");
// } else if (a == b + 1 || a == --b) {
//   document.write("close");
// }
//  else {
//   document.write("try again");
// }

// // 12
// var a =+prompt("enter a nunmb");
// if (a%3==0){
//   document.write("no is / by 3")
// }
// else{
//   document.write("no is !/ by 3")

// }

// // 13

// var a = +prompt("enter score 1:")
// var b = +prompt("enter score 2:")
// if(a>b){
//   document.write("a wins");
// }
// if(b>a){
//   document.write("b wins");
// }
// if(a==b){
//   document.write("draw");
// }

//    //   // 14
// // Prompt the user for input
// var userInput = prompt("Enter something:");

// // Check the type of the userInput
// // console.log(typeof userInput);

// // Check for specific data types
// if (userInput === null) {
//   console.log("User canceled the prompt.");
// } else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
//   console.log("User entered a boolean.");
// } else if (!isNaN(userInput)) {
//   console.log("User entered a number.");
// } else {
//   console.log("User entered a string.");
// }

// // 15
// var a=+prompt("enter a number");
// if (a%2==0){
//   console.log("even");
// }
// else if (a%2==1){
//   console.log("odd");
// }
// else{
//   console.log("wrong!!")
// }

// // 16
// var a = +prompt("enter a temperature");
// if (a > 40) {
//   console.log("too hot");
// } else if (a >= 30) {
//   console.log("normal weather");
// } else if (a >= 20) {
//   console.log("cool weather");
// } else if (a >= 10) {
//   console.log("quite cold");
// } else if (a < 10) {
//   console.log("too cold weather");
// } else {
//   console.log("wrong info given");
// }

// // 17
// var a = +prompt("enter n1");
// var b = +prompt("enter n2");
// var c = prompt("enter op");

// if (c == "+") {
//   alert(a+" " + c + " "+b + " = " + (a + b));

// } else if (c == "-") {
//   alert(a+" " + c + " "+b + " = " + (a - b));
// } else if (c == "*") {
//   alert(a+" " + c + " "+b + " = " + (a * b));
// } else if (c == "/") {
//   alert(a+" " + c + " "+b + " = " + (a / b));
// } else if (c == "%") {
//   alert(a+" " + c + " "+b + " = " + (a % b));
// } else {
//   console.log("wrong info given");
// }

// // 18
// // Prompt the user for the day name
// var dayName = prompt("Enter the day name:");

// // Convert the input to lowercase to handle different capitalizations
// dayName = dayName.toLowerCase();

// // Check the day and display the appropriate message
// if (dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday") {
//   console.log("It's a week day.");
// } else if (dayName === "saturday") {
//   console.log("It's weekend.");
// } else if (dayName === "sunday") {
//   console.log("Yay! It's a holiday.");
// } else {
//   console.log("Invalid input. Please enter a valid day name.");
// }

// // 19
// var userScore = prompt("Enter your score:");

// // Convert the input to a number
// userScore = parseFloat(userScore);

// // Check the score and provide feedback
// if (userScore > 50) {
//   console.log("You are passed.");
// } else {
//   console.log("Try again!");
// }

// // 20    //
// // Prompt the user for two numbers
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));

// // Check and compare the numbers
// if (num1 > num2) {
//   console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
// } else if (num2 > num1) {
//   console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
// } else {
//   console.log("The numbers " + num1 + " and " + num2 + " are equal.");
// }

// 21
// // Prompt the user for a language code
// var languageCode = prompt("Enter a language code (e.g., 'en' for English, 'es' for Spanish, 'de' for German):");

// // Define default messages for each language
// var greetings = {
//   "en": "Hello, World",
//   "es": "Hola, Mundo",
//   "de": "Hallo, Welt"
// };

// // Check if the language code exists in the greetings object
// if (greetings.hasOwnProperty(languageCode)) {
//   console.log(greetings[languageCode]);
// } else {
//   console.log("Hello, World"); // Default to English if the language code is not recognized
// }

// 22
// // Prompt the user for a number
// var userInput = parseFloat(prompt("Enter a number:"));

// // Check if the number is positive, negative, or zero
// if (userInput > 0) {
//   console.log("The number is positive.");
// } else if (userInput < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// // 23
// // Prompt the user for a noun and a number
// var noun = prompt("Enter a noun:");
// var number = parseInt(prompt("Enter a number:"));

// // Determine the pluralized form
// var pluralizedNoun;

// if (number === 1) {
//   pluralizedNoun = noun; // No change for singular form
// } else {
//   // Add "s" for plural form for most nouns (simple rule)
//   if (noun.slice(-1) === "y") {
//     pluralizedNoun = noun.slice(0, -1) + "ies"; // Handle nouns ending in "y"
//   } else {
//     pluralizedNoun = noun + "s";
//   }
// }

// // Display the result
// console.log(number + " " + pluralizedNoun);

// <!-- ///////////////////////////////////////////////////// chap 12 - 13 ///////////////////////////////////////////////////////////////////////////-->
// 1-4 already done before

// // 5
// var a = +prompt("enter any num");
// switch (a % 3) {
//   case 0:
//     console.log("number is divisible by 3");
//     break;
//   default:
//     console.log("number is not divisible by 3");
// }

//       // 6
// var a= prompt("eneter any character");
// if (a.length===1){
//   var b = a.charCodeAt(0);
//   if (b>=48 && b<=57){
//     console.log("number");
//   }
//   else if (b >= 65 && b <= 90) {
//         console.log("The input is an uppercase letter.");
//     }
//     // Check if it's a lowercase letter
//     else if (b >= 97 && b <= 122) {
//         console.log("The input is a lowercase letter.");
//     } else {
//         console.log("The input is not a number, uppercase letter, or lowercase letter.");
//     }
// }
// else{
//   console.log("eneter single character");
// }

// // 7

// var a = +prompt("enter 1st num");
// var b = +prompt("enter 2nd num");
// var c = prompt("enter operator");
// switch (c) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "%":
//     console.log(a % b);
//     break;
//   default:
//     console.log("wrong op entered");
//     break;
// }

// 8
// var a = +prompt("eneter time in (1200) format");
// if (a >= 0000 && a < 1200) {
//   console.log("gm");
// } else if (a >= 1200 && a < 1700) {
//   console.log("ga");
// } else if (a >= 1700 && a < 2100) {
//   console.log("ge");
// } else if (a >= 1700 && a < 2359) {
//   console.log("gn");
// } else {
//   console.log("wrong value entered");
// }

// // 9
// var a= prompt("eneter name of a year");
// if(a%4==0){
//   console.log("leap");

// }
// else{
//   console.log("not leap");

// }

// // 10
// var a = "chaman";
// var b = prompt("eneter your pass");
// if (b === "") {
//   console.log("enter any thing");
// } else if (b === a) {
//   console.log("Correct");
// } else {
//   console.log("INCorrect");
// }

// // 11
// done it before

// // 12
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);

// // 13
// done it before

// // 14
//       var b = prompt("eneter your number");
//       if(b>0){
//       console.log("positive");
//       }
//       else if(b==0){
//         console.log("zero");
//       }
//       else{
//       console.log("neg");

//       }

// // 15
// const currentHour = parseInt(prompt("Enter the current hour (24-hour format):"));

// if (currentHour >= 6 && currentHour < 9) {
//     alert("Breakfast is served.");
// } else if (currentHour >= 11 && currentHour < 13) {
//     alert("Time for lunch.");
// } else if (currentHour >= 17 && currentHour < 20) {
//     alert("It's dinner time.");
// } else {
//     alert("Sorry, you'll have to wait, or go get a snack.");
// }

// // 16-18
// done it before

// // 19
// const userInput = parseInt(prompt("Enter a number (1-12) to get the corresponding month:"));

// switch (userInput) {
//     case 1:
//         alert("January");
//         break;
//     case 2:
//         alert("February");
//         break;
//     case 3:
//         alert("March");
//         break;
//     case 4:
//         alert("April");
//         break;
//     case 5:
//         alert("May");
//         break;
//     case 6:
//         alert("June");
//         break;
//     case 7:
//         alert("July");
//         break;
//     case 8:
//         alert("August");
//         break;
//     case 9:
//         alert("September");
//         break;
//     case 10:
//         alert("October");
//         break;
//     case 11:
//         alert("November");
//         break;
//     case 12:
//         alert("December");
//         break;
//     default:
//         alert("Invalid input. Please enter a number between 1 and 12.");
// }

// // 20
// const age = 16; // Replace this with the actual age value

// const voteable = age < 18 ? "Too young" : "Old enough";

// console.log(voteable); // It will output "Too young" for age < 18, and "Old enough" for age >= 18.

// <!-- ///////////////////////////////////////////////////// chap 14 - 17 ///////////////////////////////////////////////////////////////////////////-->

// // 1
// var std1 = [];
// // 2
// var std2 = {};
// // 3
// var std3 = ["abc", "def", "ghi"];
// // 4
// var std4 = [1, 2, 3, 4];
// // 5
// var std5 = [true, false];
// // 6
// var std6 = [1, "a", true];
// // 7
// var std7 = ["ufone", "jazz", "telenor"];
// // 8
// var std8 = ["ssc", "bscs","master", "phd"];
// for (var i = 0; i < std8.length; i++) {
//   document.write(i + 1 + ") " + std8[i] + "<br>");
// }
// // 9
// document.write("length of an array: " + std8.length + "<br>");
// // 10
// var firstIndex = 0;
// var lastIndex = std8.length - 1;
// document.write(
//   "first index of an array: " + firstIndex + "<br>"
// );
// document.write(
//   "element on first index of an array: " + std8[firstIndex] + "<br>"
// );
// document.write(
//   "last index of an array: " + lastIndex + "<br>"
// );
// document.write(
//   "element on last index of an array: " + std8[lastIndex] + "<br>"
// );

//  // 11

// var arr1 = ["ali", "saad", "taha","adjslk"];
// var arr2 = [400, 350, 450,70];
// for (var i = 0; i< arr1.length; i++) {
//   document.write(
//     "score of " +
//       arr1[i] +
//       ": " +
//       arr2[i] +
//       " & percentage is: " +
//       (arr2[i] / 500) * 100 +
//       "%" +
//       "<br>"
//   );
// }

// 12
// var arr = ["red", "green", "blue", "white", "yellow"];
// document.write(arr + "<br> <br>");

// // 12)a
// var b = prompt("what color you want to add in begining of an array");
// arr.unshift(b);
// document.write(arr + "<br>");

// // 12)b
// var a = prompt("what color you want to add in end of an array");
// arr.push(a);
// document.write(arr + "<br>");

// // 12)c
// var c = prompt("what color you want to add 1st color in start of an array");
// var d = prompt("what color you want to add 2nd color in start of an array");
// arr.unshift(c,d);
// document.write(arr + "<br>");

// // 12)d
// arr.shift();
// document.write(arr + "<br>");

// // 12)e
// arr.pop();
// document.write(arr + "<br>");

// // 12)f
// var g=prompt("which index you want to add a color");
// var h=prompt("add a color");
// arr.splice(g,0,h);
// document.write(arr + "<br>");

// // 12)g
// var g = prompt("from which index you want to delete a color");
// var h = prompt("how many color you want to delete");
// arr.splice(g, h);
// document.write(arr + "<br>");

// // 13
// var p=[121,324,213798719287,27,2,13,1];
// document.write(p + "<br>");
// p.sort();
// document.write(p + "<br>");

// // 14
// var p=["stra","apple","orange"];
// document.write(p + "<br>");
// p.sort();
// document.write(p + "<br>");

// // 15
// var arr = ["This", " is ", "my", "cat"];
// document.write(arr + "<br>");
// var j = arr.join(" ");
// document.write(j+"<br>");

// // 16
// // Create a new array
// var fifoArray = [];

// // Add values to the array (FIFO)
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// // Access and remove values in the order they were stored
// var firstValue = fifoArray.shift(); // Removes and returns "Value 1"
// var secondValue = fifoArray.shift(); // Removes and returns "Value 2"
// var thirdValue = fifoArray.shift(); // Removes and returns "Value 3"

// // Print the values in the order they were stored
// console.log("First In First Out (FIFO) Order:");
// console.log(firstValue); // "Value 1"
// console.log(secondValue); // "Value 2"
// console.log(thirdValue); // "Value 3"

//       // 17
// // Create a new array
// var lifoArray = [];

// // Add values to the array (LIFO)
// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");

// // Access and remove values in reverse order
// var lastValue = lifoArray.pop(); // Removes and returns "Value 3"
// var secondLastValue = lifoArray.pop(); // Removes and returns "Value 2"
// var thirdLastValue = lifoArray.pop(); // Removes and returns "Value 1"

// // Print the values in reverse order (LIFO)
// console.log("Last In First Out (LIFO) Order:");
// console.log(lastValue); // "Value 3"
// console.log(secondLastValue); // "Value 2"
// console.log(thirdLastValue); // "Value 1"

// // 18
// // Define an array of phone manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Use the document.write method to create a dropdown/select menu
// document.write("<label for='manufacturer'>Choose a manufacturer:</label>");
// document.write("<select id='manufacturer'>");

// // Loop through the manufacturers array to create options for the dropdown
// for (var i = 0; i < manufacturers.length; i++) {
//   document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");

// // 19
// var multiArray = [[], [], []];
// 20
// Declare and initialize the multidimensional array representing the matrix
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Use document.write to display the matrix
document.write("<table border='0'>");
for (var i = 0; i < matrix.length; i++) {
  document.write("<tr>");
  for (var j = 0; j < matrix[i].length; j++) {
    document.write("<td>" + matrix[i][j] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

////////////////////////////////////////////////////////////////////////////////////
