/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    const last = s.split(" ");
    return last[last.length-1].length
};