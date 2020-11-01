const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n, t) {
  let turns_value = Math.pow(2, n) - 1;
  let time_value = turns_value / (t/Math.pow(60, 2));
  time_value = Number(Math.floor(time_value));
  let result = {
    turns: turns_value,
    seconds: time_value
  };
  return result
};