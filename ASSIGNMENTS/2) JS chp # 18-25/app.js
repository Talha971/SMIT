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

// 18
for (var i = 0; i < 8; i++) {
  var a = (i += 1);
  // console.log(i*(i+1));
  console.log(a*(i));
}
