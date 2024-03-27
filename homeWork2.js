//1

//function sum(a, b) {
   
    //return a + b
//}

//console.log(sum("Hello", "World!"));

//2

//const array = ['1', '2', '3', '4'];

//function sum(a, b, c, d) {
    //return a + b + c + d;
  //}
  
  //let result = sum(array[0], array[1], array[2], array[3]);
  
//console.log( result );

//3

//function reverseString(str) {
    
    //var splitString = str.split(""); 
    //var reverseArray = splitString.reverse(); 
    //var joinArray = reverseArray.join(""); 
       //return joinArray; 
//}
 
//console.log(reverseString("ООООчень тупил"));

// 4

//function upperCase(str) {
    
   //var firstUpper = str[0].toUpperCase(); 
   
   //var join = firstUpper + str.slice(1);

   // return join; 
//}
 
//console.log(upperCase("hello"));

// 5

//function random(min, max) {
    //return Math.random(min, max);
//}

//console.log(random(1, 10));


// 6



 
                     
//const arr = [1, 2, 3, 4, 5]
//const sum = arr.reduce(function (zero, first) {
  //return zero + first
//})
//console.log(sum);

//7
const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce(function (zero, first) {
  return zero + first
})
const avarege = sum / arr.length;
console.log(avarege);