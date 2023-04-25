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

function isPrime(num) {
  //TODO
if(num < 2){
  return console.log(false)
}
else if(num === 3){

  return console.log(true)
}
let Stringsum = num.toString().split("").map(Number).reduce((a,b) => a+b) / 3
console.log(Stringsum)


if(Stringsum - Math.floor(Stringsum) !==0){
return console.log(false) 
}
else{
  return console.log(true)
}
}


isPrime(1981618848)