//Problem 1
function sleepIn(weekday,vacation){
    if (!weekday || vacation) {
        return true
    }
    else {

       return false

    }
}
console.log(sleepIn(false, false)); 
console.log(sleepIn(true, false));  
console.log(sleepIn(false, true));  

//Problem 2

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}

        
console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));




   //Problem 3

function stringTimes(str, n) {
    if (n < 0) {
      
      return '';
    }
    
    var result = '';
    for (var i = 0; i < n; i++) {
      result += str;
    }
    
    return result;
  }
  
  
  console.log(stringTimes("Hi", 2)); 
  console.log(stringTimes("Hi", 3)); 
  console.log(stringTimes("Hi", 1)); 
  

  //Problem 4

  function luckySum(a, b, c) {
    if (a === 13) {
      return 0; // If a is 13, the sum should be 0
    } else if (b === 13) {
      return a; // If b is 13, only include 'a' in the sum
    } else if (c === 13) {
      return a + b; // If c is 13, include 'a' and 'b' in the sum
    } else {
      return a + b + c; // If none of them is 13, include all values in the sum
    }
  }
  console.log(luckySum(1, 2, 3));   
  console.log(luckySum(1, 2, 13));  
  console.log(luckySum(1, 13, 3));  
  

  //Problem 5  
  function caught_speeding(speed, is_birthday) {
    if (is_birthday) {
      speed -= 5;
    }
  
    if (speed <= 60) {
      return 0; 
    } else if (speed >= 61 && speed <= 80) {
      return 1; 
    } else {
      return 2; 
    }
  }

  console.log(caught_speeding(60, false)); 
  console.log(caught_speeding(65, false));
  console.log(caught_speeding(65, true));  
  
  
  
  
  
  
  