// Free Code Camp
// Javascript module ==> Basic Scripting
// Exercise ==> Return Larger Numbers In Array

function largestOfFour(arr){
  // Set Variable to Store each array's Largest Number
  var largestNumber = [];

  // checking on each Array
  arr.forEach(function (currentValue, index, array){
    console.log(currentValue);

    // Look for the largest Number and place
    largestNumber[index] = Math.max.apply(Math, currentValue);
  })
  // Log Result for conviniency
  console.log(largestNumber);
  return largestNumber;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
