function isPalindrome(word) {
  // let word1 = "";
  // if ((word1 === "abba", "racecar", "a")) {
  //   return true;
  // } else if ((word1 != "abba", "racecar", "a")) {
  //   return false;
  // }
  const word1 = word.split("").reverse().join("");
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  initialize your function ispalindrome
  write an if statment that takes in conditions in the if it should only have values of "mom" and "racecar"
  then consolelog("true")
  else return false 
*/

/*
  Add written explanation of your solution here
    Write your algorithm here
     This particular funtion takes one argument called word,if the string takes in an input of "mom"or"racecar" then the output is true but if it takes diffrent values its false
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
