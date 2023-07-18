// var arr = new Array();
// var ar = new Array("toyota","nissan");
// var arr2 = new Array("car", 2000, ar)
// var arr3 = new Array("truck", 500,"ford");
// var arr4 = new Array("bike", 650,"honda");
// arr.push(arr2);
// arr.push(arr3);
// arr.push(arr4)
// console.table(arr)

// var arr5 = new Array("scooter", 1500, null)
// arr.push(arr5);
// console.table(arr)

var arr = new Array();
var row1 = new Array(200,50,300,5);
var row2 = new Array(10,25,7,100);
var row3 = new Array(25,20,70,45);
var row4 = new Array(500,170,11,35);
arr.push(row1)
arr.push(row2)
arr.push(row3)
arr.push(row4)

console.table(arr)

var prompt = require('prompt-sync')()
var row = Number(prompt("enter thr row: "))
var startcolumn = Number(prompt("enter where the column starts: "))
var endcolumn = Number(prompt("enter where the column ends: "))

 function datascientist(arr,row,startcolumn,endcolumn){
 return arr[row].slice(startcolumn,endcolumn)
}

console.log(datascientist(arr, row, startcolumn, endcolumn))

