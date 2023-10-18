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

// 12
for(var i=1;i<=20;i++){
    document.write(i*5+" ");
}
