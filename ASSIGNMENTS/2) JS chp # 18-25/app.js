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

document.write("<p>");
document.write("Counting: ");

for (var i = 1; i < 20; i++) {
  document.write(i + " ");
}
document.write("</p>");

document.write("<p>");
document.write("Reverse Countin: ");
for (var i = 20; i > 1; i--) {
  document.write(i + " ");
}
document.write("</p>");

document.write("<p>");
document.write("Even: ");
for (var i = 2; i < 20; i++) {
  document.write(i++ + " ");
}
document.write("</p>");

document.write("<p>");
document.write("Odd: ");
for (var i = 1; i < 20; i++) {
  document.write(i++ + " ");
}
document.write("</p>");

document.write("<p>");
document.write("Series: ");
for (var i = 2; i <= 20; i++) {
  document.write(i++ + "k ");
}
document.write("</p>");
