const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor () {
    this.count = 1;
    this.maxCount = 1;
    this.lastItem = undefined;
    this.lever = true;
    this.lastIndex = 0;
  }
  
  calculateDepth(arr) {

    for (let i = 0; i < arr.length; i++) {
      if (this.lever == true) {
        this.count = 1;
        this.maxCount = 1;
        this.lastItem = arr[arr.length - 1];
        this.lastIndex = arr.length - 1;
        this.lever = false;
      }
      if (Array.isArray(arr[i]) == true)  {
        this.count += 1;
        if (this.count > this.maxCount) {
          this.maxCount = this.count;
        }
        this.calculateDepth(arr[i]);
        this.count = 1;
      }
      if (arr[i] == this.lastItem && i == this.lastIndex) {
        this.lever = true;
        this.lastItem = undefined;
        return this.maxCount
      }
    }
  }
}