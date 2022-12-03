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

function lovefunc(flower1, flower2){
  // moment of truth
  
  if(flower1%2==1 && flower2%2==0 ){  
      return true;   
  }
  else{
    return false;
  }
}

lovefunc(1,4)
// function lovefunc(flower1, flower2){
//   return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
// }