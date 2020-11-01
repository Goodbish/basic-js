const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(age) {

  if (typeof(age) == 'string' && typeof(age) !== 'number') {
    age = Number(age);
    if (isFinite(age) === false || age > 15 || age <= 0) {
      return false
    }
    let activity = (MODERN_ACTIVITY / age);
    let k = (0.693/HALF_LIFE_PERIOD);
    let result = (Math.log(activity))/k;
    result = result.toFixed(0);
    console.log(result);
    return result
  } else {
    return false
  }

  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
