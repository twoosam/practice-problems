/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
  let reversedString = '';
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== '') {
      reversedString += words[i];
      if (i > 0) {
        reversedString += ' ';
      }
    }
  }
  return reversedString.trim();
};