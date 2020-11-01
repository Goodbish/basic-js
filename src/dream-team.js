const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = [];
  if (typeof(arr) !== 'object' || arr == null) {
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) !== 'string') continue;
    arr[i] = arr[i].replace(/\s/g, '');
    if (/[A-Z]/gi.test(arr[i][0]) == true) {
      result.push(arr[i][0])
    }
  }
  result = result.sort(function (a, b) {
    return a.localeCompare(b);
  }).join('');
  return result.toUpperCase()

};

