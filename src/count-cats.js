const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y< arr[i].length; y++) {
      if (arr[i][y] == "^^") {
        count++;
      }
    }
  }

  return +count
  
};
