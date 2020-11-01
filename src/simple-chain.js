const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mainArr: [],
  train: '',

  addLink(value) {
    this.mainArr.push(value);
    return this
  },

  removeLink(position) {
    if (position > 0 && position < this.mainArr.length ) {
      this.mainArr.splice(position - 1, 1);
    } else {
      this.mainArr = [];
      this.train = '';
      throw new Error()
    }
    return this
  },

  reverseChain() {
    this.mainArr.reverse();
    return this
  },

  finishChain() {
    for (let i = 0; i < this.mainArr.length; i++) {
      if (i == this.mainArr.length - 1) {
        this.train += `( ${this.mainArr[i]} )`;
        break;
      }
      this.train += `( ${this.mainArr[i]} )~~`
    }
    this.mainArr = [];
    let result = this.train;
    this.train = '';
    return result
  }
};

module.exports = chainMaker;
