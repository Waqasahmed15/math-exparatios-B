            // MATH EXPRESSIONS Part B
            // Chapter 6 Q:1
var a = 10;
document.write("The value of a is:" + a + "<br><br>");

var a = ++a;
document.write(" the value is ++a is:"+ a + "<br>");

var a;
document.write("Now the value of a is:" + a + "<br><br>")

var a = a++;
document.write(" the value is a++ is:"+ a + "<br> ");

var a = ++a;
document.write("Now the value of a is:" + a + "<br><br>")
 

var a = --a;
document.write(" the value is a-- is:"+ a + "<br>");

var a;
document.write("Now the value of a is:" + a + "<br><br>")

document.write(" the value is a-- is:"+ a + "<br>");
var a = a--;
document.write("Now the value of a is:" + --a + "<br><br>")

                  // Chapter 5 Q:2
// var a = 2, b = 1;
// document.write("a is :" + a + "<br>");
// document.write("b is :" + b + "<br>");   
// var result = --a - --b + ++b + b--;
// document.write("resauls is : "+ result + "<br>"+ "<br>");


                   
                  // Chapter 5 Q:3
// var userName = prompt("UserName")
// alert("Welcom Sir")


                  // Chapter 5 Q:4
// if (num = prompt("Write Table Of a number")){
// document.write(num + " * 1 =" + num * 1 + "<br>");
// document.write(num +" * 2 =" + num * 2 + "<br>");
// document.write(num +" * 3 =" +num * 3 + "<br>");
// document.write(num +" * 4 =" +num * 4 + "<br>");
// document.write(num +" * 5 =" +num * 5 + "<br>");
// document.write(num +" * 6 =" +num * 6 + "<br>");
// document.write(num +" * 7 =" +num * 7 + "<br>");
// document.write(num +" * 8 =" +num * 8 + "<br>");
// document.write(num +" * 9 =" + num * 9 + "<br>");
// document.write(num +" * 10 =" +num * 10 + "<br>");
// }
// else{
//      document.write("5  * 2 ="+ 5 * 2 + "<br>")
//     document.write("5  * 3 ="+5 * 3 + "<br>")
//     document.write("5  * 4 ="+5 * 4 + "<br>")
//     document.write("5  * 5 ="+5 * 5 + "<br>")
//     document.write("5  * 6 ="+5 * 6 + "<br>")
//     document.write("5  * 7 ="+5 * 7 + "<br>")
//     document.write("5  * 8 ="+5 * 8 + "<br>")
//     document.write("5  * 9 ="+5 * 9 + "<br>")
//     document.write("5  * 10="+5*  10 + "<br>")
// }

   

                 // Chapter 5 Q:5
// var allSub=  "<b>Sebjects " +" " + "Total marks "+" " + " " +" obtained marks" + " " +" Percentage" + "<b/>"+"<br>";
//  document.write(allSub);



var sub1 = "Eng";
document.write(sub1 + "  ")
engtoatalMarks = 100;
engobtainedMArks = prompt("English obt marks");
percantage = engobtainedMArks*100/engtoatalMarks;
document.write(engtoatalMarks+ " " + + engobtainedMArks + " " + percantage + "% <br>")

var sub2 = "Math";
document.write(sub2 + " ")
mathtoatalMarks = 100;
mathObtainedMArks = prompt("Math obt marks");
percantage = mathObtainedMArks*100/mathtoatalMarks;
document.write(mathtoatalMarks+ " " + + mathObtainedMArks + " " + percantage + "% <br>")


var sub3 = "Urdu";
document.write(sub3 + " ")
urdutoatalMarks = 100;
urduObtainedMArks = prompt("Urdu obt marks");
percantage = urduObtainedMArks*100/urdutoatalMarks;
document.write(urdutoatalMarks+ " " + + urduObtainedMArks + " " + percantage + "% <br>")

totalMarks = engtoatalMarks + mathtoatalMarks + urdutoatalMarks;
document.write("   " + totalMarks + " ")








