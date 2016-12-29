// Free Code Camp
// Javascript module ==> Basic Scripting
// Exercise ==> Check for Palindromes


function palindrome(word) {
  // Convert word to an Array
  word = word.toLowerCase().split('');
  var specialChar = ".,*_-/\() ";

  // Take out special chars
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < specialChar.length; j++) {
      if (word[i] === specialChar[j] ) {
        word.splice(i--,1);
      }
    }
  }
  word = word.join('');

  // Create a reverse word
  var reverseWord = word.split('').reverse().join('');

  // Check if reverse word does match original word
  if (reverseWord == word) {
    return true;
  }else{
    return false;
  }
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("a man, a plan, a canal. panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("my age is 0, o si ega ym");
palindrome("0_0 (: /- :) 0-0");
palindrome("five|_/|four");
