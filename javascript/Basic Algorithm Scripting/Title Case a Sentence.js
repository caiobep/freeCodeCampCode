// Free Code Camp
// Javascript module ==> Basic Scripting
// Exercise ==> Capitalize a Sentence

function capitalize(sentence){
  // Get each word from sentence
  var word = sentence.split(' ');

  // for each word
  word.forEach(function(currentValue, index, arr){
    var firstLetter = currentValue[0];
    var restOfWord = currentValue.toLowerCase().split('').splice(1,currentValue.length);
    restOfWord.splice(0,0,firstLetter.toUpperCase());
    var capitalizedWord = restOfWord.join('');
    arr[index] = capitalizedWord;
  });

  var capitalizedSentence = word.join(' ');
  console.log(capitalizedSentence);
  return capitalizedSentence;
}

capitalize("I'm a litte tea pot");
capitalize("sHort AnD sToUt");
capitalize("HERE IS MY HANDLE HERE IS MY SPOUT");
