function isPalindrome(word) {
  const length = word.length
  for( i=0; i<length; i++) {
    console.log(word[i])
    console.log(word[length -1])
if (word[i] !== word[length - 1]){
  return false
}
else{
  return true
}
  }
  // Write your algorithm here
}


/* 
  Add your pseudocode here
  if the paramter is a palindrome
  get length of word
  check that the indexes match
  return true 
  anything else 
  return false
*/

/*
  Add written explanation of your solution here
1) find the lenght of the argument 
2) iterate through the first half of the indexes of the word 
3) if the characters do not match then return false 
4) anything else returns true 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting:false")
console.log("=>", isPalindrome("local"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
