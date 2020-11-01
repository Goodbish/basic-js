const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
    let repeatTimes = options.repeatTimes,
      separator = options.separator,
      addition = options.addition,
      additionRepeatTimes = options.additionRepeatTimes || 0,
      additionSeparator = options.additionSeparator,
      result = '';

    if (separator == undefined) {
        separator = ['+']
    }


    if (repeatTimes == undefined) {
        repeatTimes = 1
    }

    if (additionSeparator == undefined) {
        additionSeparator = ['']
    } else {
        additionSeparator = String(additionSeparator)
    }

    if (addition === null) {
        addition = 'null'
    }
    if (addition === undefined) {
        addition = ['']
    } else {
        addition = String(addition)
    }

    
    for (let i = 0; i < repeatTimes; i++) {
        result += str;
        if (additionRepeatTimes == '') {
            result += addition;
        }
        for (let y = 0; y < additionRepeatTimes; y++) {
            result += addition;
            if (y !== additionRepeatTimes - 1) {
                result += additionSeparator;
            }
        }
        if (i !== repeatTimes - 1 && repeatTimes > 1) {
            result += separator
        }
    }
        return result
};