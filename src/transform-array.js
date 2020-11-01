const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let change = arr.slice();
  for (let i = 0; i < change.length; i++) {
    switch (change[i]) {
      case '--discard-next': if (i === change.length - 1) {change.splice(i, 1); i--; break;};
      change.splice(i, 2, 'discard', 'discard');
      break;
      case '--discard-prev': if (i === 0) {change.splice(i, 1); i--; break;};
      change.splice(i-1, 2, 'discard', 'discard');
      break;
      case '--double-next': if (i === change.length - 1) {change.splice(i, 1); i--; break;};
      change[i] = change[i + 1];
      break;
      case '--double-prev': if (i === 0) {change.splice(i, 1); i--; break;};
      change[i] = change[i - 1];
      case 'discard': break;
    }
  }
  for (let y = 0; y < change.length; y++) {
    if (change[y] == 'discard') {
      change.splice(y, 1);
      --y;
    }
  }
  return change
};
