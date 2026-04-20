
function numberType(number) {
  if (number > 0) {
    return "the number is positive";
  } else if(number < 0){
return "the number is negative";
  } else if (number ===0) {
return "the number is zero";
  } else{
    return "not a valid input";
  }
}

console.log(numberType(7)); 

console.log(numberType(-10));

console.log(numberType(0)); 

console.log(numberType("ten")); 
