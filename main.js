// let num = prompt("Enter your Age")
// let years = parseInt(num) - 18;
// num >=18 ?console.log("You are old enough to drive") :console.log(` You are Left wih ${Math.abs(years)} years`)

// let num = prompt("Enter your age")
// let age2 = 18
// let comparison = parseInt(num) - age2
// num >18 ? console.log(`you are older by${comparison}`):console.log(`i am older by ${Math.abs(comparison)}` )

// function validatePIN(pin) {

//  let filter = pin.match(/\d+/g);

//     if(pin.length == 4 && pin == filter){
//       console.log(filter)
//       return true
//     }
//     else if(pin.length == 6 && pin == filter){
//       console.log(filter)
//       return true
//     }
//     else{
//       return false
//     }

//    }

// validatePIN(`accc34`)
// let pattern = /\d+/;
// console.log(pattern.test(`Sally is 1 year old.
// Harry's phone number is 1234.`));
// console.log(pattern.test("I had frozen yoghurt after lunch today"));
// function printThis(pin){
//    let pinned= /\d+/;
//    console.log(pinned.test(pin));
//    console.log(pinned.test(pin));
// }
// printThis(`ABC123343`)

// let NanErrorLmao = ("b" + "a" + + "a" + "a")
// console.log(NanErrorLmao)

// function accum(s) {

//    for(let c of s){
//       for(c=0; c <s.length; c++){
//          console.log(c);
//       }
//    }
// }
// accum("Justin")

// function accum(s){
// let textsplit = s.split("")
// // console.log(textsplit)
// let indexNum = 0;
// for(i=0;i<textsplit.length;i++){
//     console.log(`subarray ${[i]}: ${textsplit[i]}`)
//     let total = [i] + textsplit[i]
//     console.log(`total is ${total}`)
// }

// }
// accum("Justin")

// function validatePIN(pin) {

//  let filter = pin.match(/\d+/g);

//     if(pin.length == 4 && pin == filter){
//       console.log(filter)
//       return true
//     }
//     else if(pin.length == 6 && pin == filter){
//       console.log(filter)
//       return true
//     }
//     else{
//       return false
//     }

//    }

// function isValidWalk(walk){
//     let numberT = walk.length
//     if(numberT== 10){

//         return true
//     }
//     else{
//         return false
//     }

//   }
//   isValidWalk("nswessnava")

// function weightOnTheMoon(weightOnEarth) {

//     let weightT = weightOnEarth + 125;
//     let answer = weightT * 0.165;
//     let converted = answer.toFixed(3);
//     let converted2 = Number(converted)
//     console.log(converted2)
//     return converted2;

//    }
//     weightOnTheMoon(68)
// function getWeightLossRatio(weightOnEarth, weightOnTheMoon) {
//  let resultlmao = (weightOnTheMoon /weightOnEarth) * 125;
//  console.log(resultlmao);
// }
// getWeightLossRatio(60,30.855)

// function getWeightLossRatio(weightOnEarth, weightOnTheMoon) {

//     // let weightT = weightOnEarth + 125;
//     // let answer = weightT * 0.165;
//     // let converted = answer.toFixed(3);
//     // let converted2 = Number(converted)

//  let resultlmao = ((weightOnTheMoon - weightOnEarth) / weightOnEarth * 100).toFixed(1);
//  let thisIT = Number(resultlmao);
//  console.log(resultlmao)
//  getWeightLossRatio(60,30.855)

// }

// function getWeightLossRatio(weightOnEarth, weightOnTheMoon) {

//     // let weightT = weightOnEarth + 125;
//     // let answer = weightT * 0.165;
//     // let converted = answer.toFixed(3);
//     // let converted2 = Number(converted)

//  let resultlmao = ((weightOnTheMoon - weightOnEarth) / weightOnEarth * 100).toFixed(1);
//  let thisIT = Math.abs(Number(resultlmao));
//  let printIT = `Weight on Earth: ${weightOnEarth} Weight on the Moon: ${weightOnTheMoon} Weight Loss Ratio: ${thisIT}`
//  console.log(printIT);

// } getWeightLossRatio(62,30.855)

// function countSheeps2(arrayOfSheep) {
//    for(i=0;i<arrayOfSheep; i++){
//     if(arrayOfSheep == "1"){
//     let counter = 0
//     counter= counter+1;
//     console.log(counter);
//     }

//    }

//   }

// // countSheeps(['1','2','3','4','5','7'])
// countSheeps2('1','1','1','4','5','7')// countSheeps([true, true, true, false])

// function lovefunc(flower1, flower2){
//   // moment of truth

//   if(flower1%2==1 && flower2%2==0 ){
//       return true;
//   }
//   else{
//     return false;
//   }
// }

// lovefunc(1,4)
// function lovefunc(flower1, flower2){
//   return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
// }
// function greet (name, owner) {
//   name == owner ? console.log('Hello boss') : console.log('Hello guest')
//    return
//  }
//  greet('justin','justins')
// function greet (name, owner) {
//   return 1 (name == owner) ? console.log('Hello boss') : console.log('Hello guest')
//  }

//  greet('justin','justins')

// function greet (name, owner) {
// if(name == owner){
//   return 'Hello boss'
// }
// else{
//   return'Hello guest'
// }
// }
// function greet (name, owner) {
//   return name === owner ? 'Hello boss' : 	'Hello guest';
// }
// greet('justin','justins')

// function simpleMultiplication(number) {
//   // your code........
// return (number %2 ==0) ? number * 8 : number * 9
// }

// simpleMultiplication(2)

// var countSheep = function(num){
//   //your code here
// for(let i=0;i<=num.length;i++){
//   console.log("i")
// }

// }
// // countSheep(4)

// var countSheep = function (num){
//   //your code here

//   let number =''
//   for(i=0;i<num.length;i++){
//     number+= (`${i}sheep...`)
//   }
//   return number
// }
// countSheep(5)
// var countSheep = function (num){
//   //your code here

//   let numberes =""
//   for(let i=0;i<=num;i++){
//     numberes+=`${i}sheep...`;
//   }
//   return numberes;
// }

// // var countSheep = function (num){
// //   let str = "";
// //   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
// //   return str;
// // }
// countSheep(7)

// function Numtot(n){
//   let total = []

//   console.log(typeof(total))
//   for(i=n;i>=1;--i){

//       total.push(i)
//     }
//     return total

//   }
//   Numtot(10)

// function paperwork(n, m) {

//   return math.sign(n) === math.sign(m) ? n * m : 0
//  }

//  paperwork(5,5)

// let num1 =8
// let num2 =0

// num1<= 0 || num2<=0 ? console.log("0") :console.log("world")

// function solution(str, ending){
//     // TODO: complete

//     let LastChar = str.charAt(str.length-1)

//    return str.includes(LastChar)

//   }
//   solution("hello","ello")

// function highAndLow(numbers){
//     let numbers1 = numbers.split(" ").sort( function(a,b) {return a-b})
//     console.log(numbers1)
//     // let result = Object.keys(numbers1).map(function (key){
//     //     return[Number(key), numbers1[key]]
//     //     });
//     //         console.log(typeof(result))
//     console.log(numbers1[0])
//     let lastARR = numbers1[numbers1.length-1] //Gets the last array
//     console.log(lastARR)
//     return `${numbers1[0]} ${lastARR}}`;

// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

// let args =  [78,56,232,412,228];
// let converted = args.sort(function(a, b) {return a - b} );
// console.log(converted[0])

/******  Product of an ARRAY ******/

// function grow(x){
//     let total = 1;
//     for(let i=0; i<=x.length;i++){
//         if(typeof(x[i]) === "number"){
//      total *= parseInt(x[i])
//         }

//     }
//     return total
//     }

//     grow([4, 1, 1, 1, 4])

/******  Check If boolean  ******/

//    function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }

/******  Double The Number  ******/

// function doubleInteger(i) {
//     // i will be an integer. Double it and return it
//     i += i
//     return i;
//   }

/******  Are you Playing Banjo? (Index)  ******/
// function areYouPlayingBanjo(name) {
//    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//  }

/******  nested Loops 2d Array  ******/

// let arr = [[1,2,3], [4,5,6], [7,8,9]]

// for(let i = 0; i<arr.length; i++){
//    // console.log(`Index ${[i]}`) for index only
//    //console.log(arr[i]) for index value
//    for(j=0;j<arr[i].length; j++){
//       console.log(arr[i][j])
//    }
// }

/******  5 square   ******/

// for(i=0;i<5;i++){
//    for(j=0;j<= i;j++){
//       console.log("* &")
//    }
// }

/******  Boolen Ternary  ******/
// function setAlarm(employed, vacation){

//    return employed == true && vacation == false ? true : false
//  }

/******  For Loop ascending   ******/

// let array = [8,3,5,2,1,7,9,4]
// let sorted = []

// for(let i = 0;i<array.length;i++){
//    for(j = i+ 1; j <array.length;j++){
//       let a =[]
//       if(array[i]> array[j]){
//          a=array[i]
//          array[i] = array[j]
//          array[j] = a
//       }
//    } sorted.push(array[i])

// }
// console.log(`Sorted array is ${sorted}`)

/* YAY GAGANA/*/

/* added commit*/
/*Added*/

//* Jaden Case Strings, Convert every first letter word in a sentence to UpperCase*/
// String.prototype.toJadenCase = function () {
//    //...
//    const words = this.split(" ");
//    const capitalizedWords = words.map(word => {
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    });
//    return capitalizedWords.join(" ");

//  };

/*Finding the Squaroot and return if it is true or not  */

// var isSquare = function(n){
//    return Math.sqrt(n) % 1 === 0 ? true : false.
//  }
// let n=2
// let print = n**4
// console.log(print)
/* Are you playing the Banjo ? */
//   function areYouPlayingBanjo(name) {
//    // Implement me

//    return name.codePointAt(0) == 82 || name.codePointAt(0) == 114 ? `${name} plays banjo` : `${name} does not play banjo`
//  }

/* L1: Set Alarm */

// function setAlarm(employed, vacation){

//    return employed == true && vacation == false ? true : false
//  }

/*Parse nice int from char problem */

// let functionCode = (inputString) =>{

//       // return the girl's correct age as an integer. Happy coding :)

//         return Number(inputString.charAt(0))

// }

// /*Jaden Casing Strings */
// String.prototype.toJadenCase = function () {
//    //...
//    const words = this.split(" ");
//    const capitalizedWords = words.map(word => {
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    });
//    return capitalizedWords.join(" ");

//  };

/*You're a square!*/

// var isSquare = function(n){
//    return Math.sqrt(n) % 1 === 0 ? true : false
//  }

/*Grasshopper - Messi goals function*/
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//    // code goes here

//  return Number(laLigaGoals) + Number(copaDelReyGoals) + Number(championsLeagueGoals)
//  }

/*Two Sum */
// let twoSum = (setNumbers, Total) => {
// for(i=0;i<=setNumbers.length;i++){
// for(j=0; j<i;j++){
//   if(setNumbers[i] + setNumbers[j] == Total){
//     let container = [i,j]
//     console.log(container)
//     return container
//   }
// }

// }

// // }
// // twoSum([1,2,3,4,5], 5)
// // Array Diff
// function arrayDiff(a, b) {
//   let newArr =[]
// for(i=0; i<a.length; i++){
// if(b.includes(a[i])){
// continue

// }else{
// newArr.push(a[i])

// }

// }
// console.log(newArr)
// }
// arrayDiff([2,3,2,2,3], [2])

// var minMaxGame = function(nums) {

// let newLength = nums.length / 2

// let newArr =[]
// for(i=0;i<nums.length;i++){
// if(i % 2 ==0 && i < newLength){
//     newArr.push(nums[2 * i], nums[2 * i + 1]) // ask gpt why is it that it returns something else when i * 2 instead
// }

// }
// console.log(newArr)
// };
// minMaxGame([1,3,5,2,4,8,2,2])

// // new variation for Leetcode
// var minMaxGame = function(nums) {
//   let newArr = []
//   let finalnewArr = []
//   for(i=0;i < nums.length; i+=2){
//       newArr.push(nums.slice(i, i + 2));
//   }
//   for(j=0;j<newArr.length;j++){
//      if(j % 2 == 0 ){
//         let  minValue = Math.min(...newArr[j])
//          finalnewArr.push(minValue)

//      }
//       else if(j % 2 !==0){
//           let maxValue = Math.max(...newArr[j])
//          finalnewArr.push(maxValue)
//       }

//   }
//   console.log(finalnewArr)

// };
// minMaxGame([1,3,5,2,4,8,2,2])

// ISPrime ?

// function isPrime(num) {
//   //TODO
// if(num < 2){
//   return console.log(false)
// }
// else if(num === 3){

//   return console.log(true)
// }
// let Stringsum = num.toString().split("").map(Number).reduce((a,b) => a+b) / 3
// console.log(Stringsum)

// if(Stringsum - Math.floor(Stringsum) !==0){
// return console.log(false)
// }
// else{
//   return console.log(true)
// }
// }

// isPrime(1981618848)

// // replace Voiwels

// function shortcut(string) {
//   let Vowels = ["a", "e", "i", "o", "u"];

//   for (let vowel of Vowels) {
//     string = string.split(vowel).join("");
//   }

//   return string;
// }

// function persistence(num) {
//   let blankValue = num
//   counter = 0

//  while(blankValue.toString().length != 1){
//   blankValue = blankValue.toString().split("").map(Number).reduce((a,b) => a * b)
//  counter++
//  }
// console.log(counter)
// }
// persistence(39)

// function diamond(n){
//   let rows =n

//   for(i=0;i<n;i++){
//   if(i % 2 !==0){
//    console.log("* \n")
//   }
//   }

//   }
//   diamond(9)z

// Square lmao
// function SquareFunction(num){
//   let height = num
//   let median = Math.ceil(height / 2)
//   for(i=1;i<=median;i++){
//       let line = ""
//   for(j=1; j<=i;j++){
//     line = "*".repeat(num)
//   }
//   console.log(line)
//   }

// }
//   SquareFunction(10)

// function countBy(x, n) {

//   let z = [];
//   let trueLength = x * n
//   for(i=1;i<=trueLength;i++){
//     if(i%x==0){
//    z.push(i)
//     }

//   }
//   console.log(z)
//   }

//   countBy(2,5)

// function tribonacci(signature,n){
//   //your code here
//     let startIndex = 0
//     let sum = 0

//   for(i=0;i<=n;i++){
//      let flow =  n[startIndex] + n[startIndex + 1] + n[startIndex + 1 + 1]
//      sum = flow
//       signature.push(sum)
//   }
//        console.log(...signature)
// }
// tribonacci( [1,1,1], 10)

// function nbYear(p0, percent, aug, p) {
//   // your code
// console.log(p0 , percent)

// let counter = 1
// while( p0 < p){
//   counter+=1
// let formula = p0 + (p0 * percent / 100) + aug
// console.log(p0, percent, aug)
// p0 = formula
// }
// console.log(counter)
// }

// nbYear(1000, 2, 50 ,1214)

// function incrementString (strng) {
//   // return incrementedString
//   // first filter using regex, - filter String From Num then just increment num
// let stringNum =  strng.match(/\d+/g)
// let lastelement = stringNum.length - 1
// let incrementedNum = parseInt(stringNum[lastelement]) + 1
// let convertedNum = incrementedNum.toString()
// let Value = stringNum[lastelement]
//     while(convertedNum.length < Value.length){
//       convertedNum = "0" + convertedNum

//     }

// let newString = strng.replace(Value,convertedNum )
// console.log(newString)
// }

// incrementString("fo99obar99")

// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
// let total = 0
// let solver =[]
// for(i=begin;i<=end;i+= step){
//   if(total + i > end ){
//   break
// }
// else{
// let numpush = total + i
// solver.push(numpush)
// }
// }
// let final = solver.reduce((a,b) => a+b)
// console.log(final)
// };

// sequenceSum(72, 431, 99)

// function order(words){
//   // ...
// // let blankArr = []
// let wordMapped = words.split(" ")
// let blankArr = []
// for(let index=0;index<wordMapped.length;index++){
//   for(let j=0;j<wordMapped[index].length;j++){
// // blankArr.push(wordMapped[index][j])
//     if(!isNaN(parseInt(wordMapped[index][j]))){
//       let numberString = wordMapped[index][j]
//       blankArr[numberString -1] = wordMapped[index]

//     }}

// }
// let sorted = blankArr.join(" ")
// console.log(sorted)
// // let sorted = blankArr.sort(function(a,b) {
// // parseInt(a,10) - parseInt(b,10)

// // })

// // console.log(sorted)

// }

// // console.log(sorted)

// order("4of Fo1r pe6ople g3ood th5e the2" )

// function findMultiples(integer, limit) {
//   //your code here

// let blankArr = []
// let newvalue = 0

// while(newvalue < limit){
// newvalue = newvalue + integer
// if(newvalue > limit){
//   break
// }
// else{
//   blankArr.push(newvalue)
// }

// }
// console.log(blankArr)
// }
// findMultiples(5,7)

// function fizzBuzz(n) {
//   // Write your code here

//   for(let i=1;i<=n;i++){
//       if(i%3==0 && i%5==0){
//        console.log("Hello")
//   }
//   else{
//   console.log(i)
//   }

// }
// }
// fizzBuzz(15)

// function compareTriplets(a, b) {
//   let counterA = 0
//   let counterb = 0
// for( let i=0;i<a.length && i<b.length;i++){
//   if(a[i] > b[i]){
//       counterA++
//   }
//   else if (a[i]< b[i]){
//       counterb++
//   }

// }
// console.log(counterA, counterb)
// }

// compareTriplets([17,28,30], [99,16,8])

// function plusMinus(arr) {
//   // Write your code here
//   let zeroCounter = 0
//   let negativeCounter =0
//   let positiveCounter =0

//    arr.map((value) =>{
//       if(value < 0){
//           negativeCounter ++
//       }
//       else if(value == 0){
//           zeroCounter++
//       }
//       else if(value > 0){
//           positiveCounter++
//       }

//   } )

//   let zeroRatio = (zeroCounter / arr.length).toFixed(6), negativeRatio = (negativeCounter/ arr.length).toFixed(6), positiveRatio = (positiveCounter / arr.length).toFixed(6)

// console.log(positiveRatio + "\n" + negativeRatio + "\n"+ zeroRatio)
// }

// function miniMaxSum(arr) {   WRONG SOLUTION HEHE
//   // Write your code here\
//   let total = []
//   let currIndex = 0
//   let arrLength = arr.length
//   for(let i=0;i<arr.length;i++){
//     arr.splice(currIndex,1)
//     if(arr.length !== arrLength-1){

//     }
//     else{
//       continue
//     }
//       console.log(...arr)
//      let arrTotal =  arr.reduce((acuumulator, curValue) =>{
//           return acuumulator + curValue
//       })

//       total.push(arrTotal)

//   }

//   console.log(total)

// }
// miniMaxSum([1,2,3,4,5])

//Remove one add one

// let removeOneAddOne = (arr) =>{

//   for(i=0;i<arr.length;i++){
//     let removeAdd = [...arr.slice(0,i) , ...arr.slice(i+1)]
//     console.log(removeAdd)

//   }

// }

// removeOneAddOne([1,2,3,4,5])

// function timeConversion(s) {
//   let splitString = s.split(":")
//   if(splitString[2].includes("") && splitString[0] == "12"){
//       console.log(s.replaceAll("PM",""))
//   }
//   if(splitString[2].includes("PM") || splitString[0]== "12" && splitString[2].includes("AM")){
//       let newNum = Number(splitString[0]) + 12
//       if(newNum == 24){
//           newNum = "00"
//       }
//       splitString.splice(0,1)
//      splitString.unshift(String(newNum))
//       let finalanswer = splitString.join(" ").replaceAll(" ", ":")
//       console.log(finalanswer.replaceAll("PM","").replaceAll("AM",""))
//   }
//   else if(splitString[2].includes("AM")){
//       console.log(s.replaceAll("AM",""))
//   }

// }
// timeConversion("12:45:54PM")

// Lonely Integer

// function lonelyinteger(a) {
//   // Write your code here

//   let blankArr = []
//   for(i=0;i<a.length;i++){
//     for(j = i + 1; j<a.length;j++){
//       if(a[i] === a[j] && !blankArr.includes(a[i])){
//         blankArr.push(a[i])
//       }
//     }
//   }

// let filteredArray = a.filter((value)=>!blankArr.includes(value))

// console.log(filteredArray)
// }

// lonelyinteger([0,0,1,2,1])

//Ascending 2 ways we can do this
// let sort = (arr, indexi , minIndex) =>{
// let temp = arr[indexi]
// arr[indexi] = arr[minIndex]
// arr[minIndex] = temp
// }

// let sortFunction = (arr)=>{
// for(let i=0;i<arr.length;i++){
//   // let minIndex = i
//   for(let j= i+1;j<arr.length;j++){
//       if(arr[j]< arr[i]){
//         // minIndex = j
//         let temp = arr[j]
//         arr[j] = arr[i]
//         arr[i] = temp
//       }
//     }
//     // sort(arr, i ,minIndex)
// }
// console.log(arr)
// }

// sortFunction([1,3,4,2,5,6])

// let DiagonalFunction=(arr)=>{
// console.log(arr)
// let LeftTotal = 0
// let RightTotal = 0
// for(i=0; i<arr.length;i++){
// LeftTotal += arr[i][i]
// }
// let lastIndex = arr.length -1

// for(i=0;i<arr.length;i++){
//   console.log(arr[i][lastIndex])
//   lastIndex--

// }

// }

// DiagonalFunction([[11,2,4] ,[4,5,6], [10,8,-12]])

// let printTriangle = (num) => {
//   let width = num;
//   let center = Math.floor(width / 2);

//   for (let i = 0; i < width; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       if (j <= center && center - j <= i) {
//         row += "*";
//       }
//     }
//     console.log(row);
//   }
// // }
// printTriangle(10);

// Destructuring Objects
// let Student= {
//   name: "Justin",
//   age: 14,
//   school: "CPU",
//   Grades: {
//       FirstSemester: 1.0,
//       SecondSemester: 1.4
//   }

// }

// let Student2= {
//   school: "West",
//   Grades: {
//       FirstSemester: 2.0,
//       SecondSemester: 4.4
//   }

// }

// const Student3 = ({...Student,...Student2})

// console.log(Student3)

// Array Destructuring

// let arr1 = [1,2,3,4,5,6]
// let  arr2 = [2,3,4,1,6,7]
// const thirdArr = [...arr1,...arr2] // destructuring
// console.log(thirdArr)

// access array 1 and 2 then make array 3 4 5 6 a sub array

//destructuring nested Objects:

// make an array and destructure it

// const Student1 = {
// name: "Justin",
// age: 20,
// favoriteFood: "Watermelon"
// }

// const Student2 = {
// name: "Kathleen",
// age: 40,
// }

// const Student3 = {...Student1,...Student2}

// console.log(Student3)

// let reverseString = (name)=>{
// let reversed = name.split("").reverse().join("").replace(/,/ , " ")
// console.log(reversed)
// }

// reverseString("pokemon")

// created a function that flats a nested array to a single array

// let flattedArr = (arr)=>{
// console.log(arr.flat())
// }

// flattedArr([1,2,4,5,[6,7,8]])

// let debounceFuntionc = (num)=>{
// num = Math.random() * (0 - 100) + 100
// console.log(num)
// }

// debounceFuntionc(Math.random() * (0 - 100) + 100)

// let startInterval = setInterval(debounceFuntionc,1000)

// setTimeout(() =>{clearInterval(startInterval)},5000)

// even numbers of an array

// let evenNumns = (arr)=>{
//   let blankArr= []
// for(i=0;i<arr.length;i++){
// if(arr[i] %2 ==0){
//   blankArr.push(arr[i])
// }

// }

// let totalNum = blankArr.reduce((a,b) => a+b)
// console.log(totalNum)
// }

// evenNumns([1,4,6,10,13,21,3])

// two dates and total in days

//dateformat = mm/dd/yyyy

// let twoDates =(date1,date2)=>{
// // convert to num

// // console.log(Array.from(date1).join(",").replace(/,/g, " "))
// // console.log(Array.from(date2).join(",").replace(/,/g, " "))
// let newdate = new Date(date1)
// let newdate2 = new Date(date2)

// let dateDifference = (newdate - newdate2)

// console.log(dateDifference)

// }

// twoDates("08/29/2001", "09/01/1999")

// array destrructuring
// const Arrr1 =[1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const combinedArr = [...Arrr1, ...arr2]
// console.log(combinedArr)

// const[num1,num2] = Arrr1

// console.log(num1, num2)

// const Student1 = {
// name:"Justin",
// age: 20,
// favFood:"Hotdogs"
// }

// const Student2 = {
//   name:"Kathleen",
//   age:18,
//   // favFood:"soup"
// }

// const {name ="Peter"} = Student1
// console.log(name)

// const newStudent = {...Student1, ...Student2}

// console.log(newStudent)

// const sortArr = (arr)=>{

//   for(i=0;i<arr.length;i++){
//       for(j=i+1;j<arr.length;j++){
//           if(arr[j] > arr[i]){
//           let tempArr = arr[j]
//           arr[j] = arr[i]
//           arr[i] = tempArr
//           }
//       }

//   }
//   console.log(arr)
// }

// sortArr([5,3,1,2,4])

// // count iterating characters and increment value in object
// function count(string) {
//   // TODO
// // console.log(string)
// let newArr = [...string]
// let convertedToObject = newArr.reduce((key,value)=>{
// if(!key.hasOwnProperty(value)){
// key[value] = 1
// }
// else{
// key[value]+=1
// }
// return key
// },{})

// return convertedToObject
// }

// function noBoringZeros(n) { // update this later by checking it from the end if it contains zero instead
//   // your code
//     let splited = n.toString().split("")
//     let let_index = splited.length -1

//     while(let_index >=0){
//       const currentValue = splited[let_index]
//       if(currentValue =='0'){
//        splited.pop()
//         let_index--
//       }else{
//         break
//       }

//     }
//   return Number(splited.join(''))

// }

// noBoringZeros(9600000)

// find the stray number: answer later
// function stray(numbers) {
//   // implement selection sort algorithm

//   for (i = 0; i < numbers.length; i++) {
//     for (j = i + 1; j < numbers.length; j++) {
//         if(numbers[i] != numbers[j]){
//             let blankNum = numbers[j]
//             numbers[j] = numbers[i]
//             numbers[i] = blankNum
//         }
//     // return numbers[i] === numbers[j] ? numbers[j] : numbers[i]
//     }
//   }
//   console.log(numbers)
// }

// stray([2,1,1])


//  reverse a string 

// const reversedString = (str)=>{

// let mapped = str.split(" ").map((value) => {
// return value.split("").reverse().join("")
// })

// console.log(mapped.join(" "))
// }

// reversedString("The quick Brown fox")

// function duplicateCount(text){
//     //...
//     let duplicates = []
//     let converted = text.toLowerCase()
//   for(i=0;i<converted.length;i++){
//     for(j=i+1;j<converted.length;j++){
//       if(converted[i] === converted[j]){
//         if(!duplicates.includes(converted[i])){
//             duplicates.push(converted[i])
//         }
//       }
//     }
//   }


//   console.log(duplicates.length)
//   }
  
//   duplicateCount("aabBcde")



// filter the domain Name without the TLD
// function domainName(url){
//   //your code here
  
//   let filtered_Vars = /https?|\.com|\/\/www.?|:|\.ru|\/\/|\.co|\.jp|\.\w{2,5}|www.?|/g

//   let url_Filtered = url.replace(filtered_Vars, "")


//   if(url_Filtered.split("/")){
//     let splitted = url_Filtered.split("/")
//     let TLD_remover = splitted[0]
//     return TLD_remover
//   }
//   else{
//     return url_Filtered
//   }
  
// }

// sorting buuble sort and built in sort func 
function solution(nums) {
  //   if (nums == null) {
  //     return [];
  //   } else if (nums.length === 0) {
  //     return [];
  //   }
  
  //   for (let i = 0; i < nums.length; i++) {
  //     let currNumber = nums[i];
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] < nums[i]) {
  //         nums[i] = nums[j];
  //         nums[j] = currNumber;
  //       }
  //     }
  //   }
  //   return nums;
    
      if (nums == null) {
      return [];
    } else if (nums.length === 0) {
      return [];
    }
    else {
      nums.sort((a,b) =>a -b)  // apparently this shit works Blargg...
    }
  return nums
  }