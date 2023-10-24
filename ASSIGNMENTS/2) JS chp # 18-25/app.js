// //////////////////////////////// chp # 18-20 ////////////////////////////////////////

// // 1
// for(i=1;i<=5;i++){
//     document.write("Hello World <br>");
// }

// // 2
// for(i=1;i<=10;i++){
//     document.write(i+ "<br>");
// }

//   // 3
//   var a = prompt("eneter a number you want");
//   var b = prompt("how many times");
//   for (var i = 1; i <= b; i++) {
//     document.write(a + " x " + i + " = " + (a * i) + "<br>");
//   }

//   //   4
//   var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
//   for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
//   }

//   // 5
//   var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
//   for (var i = 0; i < A.length; i++) {
//     document.write("element on " + i + " index is: " + A[i] + "<br>");
//   }

// // 6
// var A = [];
// var b = +prompt("enter amount of words in array");
// for (var i = 0; i < b; i++) {
//   var c = prompt("enter a word: ");
// document.write(c+"<br>");
// }
// (document.getElementById("abc").innerHTML =
//   "Number of items: " + b);

// 7

// document.write("<p>");
// document.write("Counting: ");

// for (var i = 1; i < 20; i++) {
//   document.write(i + " ");
// }
// document.write("</p>");

// document.write("<p>");
// document.write("Reverse Countin: ");
// for (var i = 20; i > 1; i--) {
//   document.write(i + " ");
// }
// document.write("</p>");

// document.write("<p>");
// document.write("Even: ");
// for (var i = 2; i < 20; i++) {
//   document.write(i++ + " ");
// }
// document.write("</p>");

// document.write("<p>");
// document.write("Odd: ");
// for (var i = 1; i < 20; i++) {
//   document.write(i++ + " ");
// }
// document.write("</p>");

// document.write("<p>");
// document.write("Series: ");
// for (var i = 2; i <= 20; i++) {
//   document.write(i++ + "k ");
// }
// document.write("</p>");

// // 8

// var arr = ["apple", "mango", "orange"];
// var b = prompt("enter the required fruit");

// for(var i=0;i<=arr.length;i++){
//     if(b==arr[i]){
//         console.log(b +" is availabel at "+i+" index");
//         break;
//     }
// }
// if(b!==arr[i]){
// console.log("not available");
// }

// // 9
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }
// document.write("The largest number in the array is: " + largest);

// // 10
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// document.write("The smallest number in the array is: " + smallest);

// // 11

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// var smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// document.write("The largest number in the array is: " + largest);
// document.write("<br>The smallest number in the array is: " + smallest);

// // 12
// for(var i=1;i<=20;i++){
//     document.write(i*5+" ");
// }

// // 14
// var scores = [12, 45, 3, 22, 34, 50];
// var a = +prompt("enetr a number");
// for(var i=0;i<scores.length;i++)
// {
//     document.write(scores[i] + " ");
//     if(a==scores[i]){
//         break;
//     }
// }
// if(a!==scores[i]){
//     document.write("not in array");
// }

// // 15
// let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//         document.write(A[i][j]+"  ");
//     }
//     document.write("<br>");
// }

// // 16
// var a = +prompt("eneter your number");
// for (var i = a; i > 0; i -= 0.5) {
//   document.write(i + "<br>");
// }

// // 17
// for (var i = 0; i < 21; i++) {
//   if (i % 2 == 0) {
//     document.write(i + ": even<br>");
//   } else {
//     document.write(i + ": odd<br>");
//   }
// }

// // 18
// // Initialize the product to 1
// let product = 1;

// // Loop through numbers from 1 to 7
// for (let num = 1; num <= 7; num++) {
//     // Check if the number is odd
//     if (num % 2 === 1) {
//         // Multiply the product by the odd number
//         product *= num;
//     }
// }

// // Print the final product
// console.log("The product of odd integers from 1 to 7 is:", product);

// // 19

// for (var i = 7; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");

// }

// // 20(a)

// for (var i = 1; i <= 6; i++) {
//   for (var j = 1; j <= 6; j++) {
//     document.write("*");
//   }
//   document.write("<br>");

// }

// // 20(b)

// for (var i = 1; i <= 6; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");

// }

// // 20(c)
// for (var i = 7; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");

// }

// //////////////////////////////// chp # 18-25 ////////////////////////////////////////

// // 1
// var a=prompt("write first name");
// var b=prompt("write last name");
// var fname=a+" "+b;
// document.write(fname);

// // 2
// var a=prompt("write favorite mobile name");
// document.write(a.length);

// // 3
// var a = "Pakistani";
// var b = a.search(prompt("enter the letter"));
// document.write("index of letter is: "+b);

// // 4
// var a = "Hello world";
// var b = a.lastIndexOf(prompt("enter the letter"));
// document.write(b);

// // 5
// var a = "Hello world";
// var b = a.charAt(4)
// document.write(b);

// // 6
// var a=prompt("write first name");
// var b=prompt("write last name");
// var c=a.concat(" "+b);
// document.write(c);

// 7
// var a = "Hello world";
// var b= a.replace("Hello","chaman");
// document.write(b);

// // 8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var c= message.replace(/and/g,"&");
// document.write(c);

// // 9

// var a = "123";
// document.write(typeof a);
// var b= parseInt(a);
// document.write(typeof b);

// // 10

// var a=prompt('enter url:')
// var b=a.slice(4);
// document.write(b);

// // 11
// var a=prompt('enter any thing');
// var b=a.toUpperCase();
// document.write(b);

// // 12
// var a=prompt('enter any thing');
// var b=a.toLowerCase();
// document.write(b);

// // 13
// var a = prompt("enter any thing");
// var b = (a.slice(0, 1).toUpperCase()) + (a.substring(2).toLowerCase());
// document.write(b);
// console.log(b)

// // 14
// var num = 35.36;
// var numAsString = num.toString(); // Convert the number to a string
// var numWithoutDot = numAsString.replace(".", ""); // Remove the dot

// // Display the result in your browser
// document.write(numWithoutDot);

// // 15
// var a="3";
// var b="3";
// document.write(a+b);

// // 16
// var a="3";
// var b="3";
// document.write(a-b);

// // 17
// // var a="khsadkjh"
// var a = prompt("eneter a username");
// var b = String.fromCharCode(33);
// var c = String.fromCharCode(44);
// var d = String.fromCharCode(46);
// var e = String.fromCharCode(64);
// if ((a === b) || (a === c) || (a === d) || (a === e)) {
//   document.write("eneter valid value!");
// }

// 18

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(item) {
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].toLowerCase() === item.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// var userInput = prompt("Enter an item to search for:");
// if (userInput !== null) { // Check if the user canceled the prompt
//   if (searchItem(userInput)) {
//     alert(userInput + " is available in the list.");
//   } else {
//     alert(userInput + " is not found in the list.");
//   }
// } else {
//   alert("Search canceled or no input provided.");
// }

// // 19
// var a = prompt("1");
// var b = prompt("2");
// if (a.length > b.length) {
//   alert("a is greater");
// } else if (a === b) {
//   alert("both eual");
// } else {
//   alert("B is greater");
// }

// // 20
// var isValid = false;

// while (!isValid) {
//   var userInput = prompt("Enter a password:");

//   if (userInput === null) {
//     alert("Password input canceled.");
//     break;
//   }

//   if (
//     userInput.length >= 6 &&
//     !/^\d/.test(userInput) &&
//     /[a-zA-Z]/.test(userInput) &&
//     /\d/.test(userInput)
//   ) {
//     isValid = true;
//     alert("Password is valid.");
//   } else {
//     alert("Password does not meet the requirements. Please enter a valid password.");
//   }
// }

// // 21
// var university = "University of Karachi";
// var universityArray = university.split("");

// for (var i = 0; i < universityArray.length; i++) {
//   document.write(universityArray[i] + "<br>");
// }


// // 22
// var a="kdasjk";
// var b=a.slice(-1);
// document.write(b);

// // 23
// var a = "the quick brown fox jumps over the lazy dog";
// var b=a.split(" the ");
// document.write(b.length);

// 24
var str = "Pakistan";
var vowels = "aeiouAEIOU";
var vowelCount = 0;
var consonantCount = 0;

for (var i = 0; i < str.length; i++) {
  var char = str[i];
  if (vowels.indexOf(char) !== -1) {
    vowelCount++;
  } else if (char.match(/[a-zA-Z]/)) {
    consonantCount++;
  }
}

document.write("String: " + str + "<br>");
document.write("Vowels: " + vowelCount + "<br>");
document.write("Consonants: " + consonantCount + "<br>");
