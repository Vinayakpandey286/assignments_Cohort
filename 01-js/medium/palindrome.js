/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "");
  let start = 0;
  let end = cleanStr.length - 1;

  while (start < end) {
    if (cleanStr[start].toLowerCase() !== cleanStr[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
