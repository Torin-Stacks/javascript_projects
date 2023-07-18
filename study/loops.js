//fibonacci
// let first = 0
// let second = 1
// let temp;

// function fibonacci(){
//     var total = 0;
//     if(total = 0){process.stdout.write(`${first}, ${second}`)}
//     while (total <= 15){
//         temp = second;
//         first = first + second;
//         second = temp + first;
//         process.stdout.write(`${first}, ${second},`)
//         total++

//     }
// }

// console.log(fibonacci())


//for loop
// let array = [9,8,7,6,5,4,3,2,1]

// for (let i= 0; i < array.length; i++){console.log(array[i])}
// for(let i in array){console.log(i)}
// for(let i of array){console.log(i)}

//let numbers ={uno: "one",duo: "two"}

//for (let element in numbers){console.log(element)}
//for(let element of Object.values(numbers)){console.log(element)}
//for(let element of Object.keys(numbers)){console.log(element)}
//for(let element of Object.entries(numbers)){console.log(element)}

// var array = [] ;
// var firstrow = new Array(4)
// var secondrow = new Array(4)
// var thirdrow = new Array(4)


//var

// let array = [
//     [{regionname: "NG",Populationnumber: 100,temperature:5, currency:"naira"},
// {regionname: "fR",Populationnumber: 100,temperature:9, currency:"JKJ"},
// {regionname: "GH",Populationnumber: 100,temperature:2, currency:"nHGH"}]

// [ {regionname: "IT",Populationnumber: 100,temperature:5, currency:"gfgf"}, 
// {regionname: "UK",Populationnumber: 100,temperature:10, currency:"naira"},
// {regionname: "NG",Populationnumber: 120,temperature:5, currency:"naira"}
// ]];



let arr = []
let row1 = new Array(4)
let row2 = new Array(4)

var obj1 = {regionname: "NG",Populationnumber: 100, temperature:5, currency:"naira"}
var obj2 = {regionname: "fR",Populationnumber: 100, temperature:9, currency:"JKJ"}
var obj3 = {regionname: "GH",Populationnumber: 100, temperature:2, currency:"nHGH"}
var obj4 = {regionname: "IT",Populationnumber: 100, temperature:5, currency:"gfgf"}
var obj5 = {regionname: "UK",Populationnumber: 100, temperature:10, currency:"naira"}
var obj6 = {regionname: "NG",Populationnumber: 120, temperature:5, currency:"naira"}

row1.push(obj1)
row1.push(obj2)
row1.push(obj3)
arr.push(row1)

row2.push(obj1)
row2.push(obj2)
row2.push(obj3)
arr.push(row2)



console.table(arr);

    var totalpopulation = 0;
    for(let index = 0; index < arr.length; index++){
        console.log(arr[index])
        for(let index2 = 0; index2 < arr[index].length; index2++){
            if(arr[index][index2].temperature <= 10 && arr[index][index2] != null){
                totalpopulation = totalpopulation + arr[index][index2].population
            }
        }
     
    }


console.log(totalpopulation)