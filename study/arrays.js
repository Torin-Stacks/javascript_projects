// var scores =[60,50,70,67,89];
// var arr = new Array(4,5,67,2,7,8);
// PushManager,pop,shift,unshift,slice, splice,
//console.log(arr.length)
//arr.push("push");
//console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("push");
// console.log(arr);
// arr.shift();
// console.log(arr);
// var arr2 = scores.concat(scores)
// console.log(arr2)
// var new_arr = arr.slice(1,3)
// console.log(new_arr)
// var new_arr = arr.splice(1,3,49,8,9,7,6)
// console.log(new_arr)
// console.log(arr)
// Array.prototype.lol = "haha"
// Array.prototype.jump = "I can jump"
// console.log(arr.jump)
// Array.prototype.sum = function(){
//     var total = 0;
//     var index;
//     for(index =0; index<this.length; index++){
//         total = total + this[index]; 
//     }
//     return total;
// }
// console.log(arr.sum())



// function secondMaximum(arr){
  
//   var maxnumber = arr[0];
//   var secondmax = arr[0];
//   for(var index = 0; index < arr.length; index++){
//     if (arr[index] > maxnumber){secondmax= maxnumber;
//       maxnumber = arr[index]}
//     else if (arr[index] < maxnumber && arr[index] > secondmax){secondmax = arr[index]}
//   }
//   return secondmax;
// }
// var arr = new Array(4,7,10,10,2,10,90,96,100,100,100)  
// console.log(secondMaximum(arr))

//  let arr = [2,3,4,5,6,7,8,9];

// arr.forEach((x) => console.log(x))

// let result = arr.filter((x) => x > 7)
// console.log(result)
//find
//findIndex
//map

// let result2 = arr.reduce((x,y) => (x+y))
// console.log(result2)

//function boardGame(length, width, object){
  
  var row = 3

  var array = new Array(row)
  
  var innerarr =  []
  innerarr.push();
  innerarr.push();
  innerarr.push();
  array.push(innerarr);

  var innerarr2 =  []
  innerarr2.push();
  innerarr2.push();
  innerarr2.push();
  array.push(innerarr2)

     

  for(var index = 0; index < array.length; index++){
    array[index] = 0
  }

  // for(var index2 = 0; index2 < row; index++){
  //   for(var index3 = 0; index3< column; index++){
  //     array1[index2][index3] = "a";
  //   }
  // }

  console.table(array)





























