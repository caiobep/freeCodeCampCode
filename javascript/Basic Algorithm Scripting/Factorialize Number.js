// Free Code Camp
// Javascript module ==> Basic Scripting
// Exercise ==> Factorialize a Number

function factorialize(num) {
  var array = [];
  if (num === 0) {
    return 1;
  }
  for (var i = 0; i < num; i++) {
    array.push(i+1);
  }
  return array.reduce(function(firstElement, secoundElement){
     return firstElement * secoundElement;
  });
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
