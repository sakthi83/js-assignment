function oddOrEven(x) {
  return ( x & 1 ) ? "odd" : "even";
}

function checkNumber(argNumber) {
  document.getElementById("result").innerHTML = "Number " + argNumber + " is " + oddOrEven(argNumber);
}
 
checkNumber(17);