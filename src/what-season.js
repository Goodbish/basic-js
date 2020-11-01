const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!'
  }
  let month = date.getUTCMonth();
  if (month >= 0 && month <= 11) {
    if (month < 2 || month == 11) {
      return 'winter'
    } else if (month >= 2 && month < 5) {
      return 'spring'
    } else if (month >= 5 && month < 8) {
      return 'summer'
    } else {
      return 'autumn'
    }
  }
};
