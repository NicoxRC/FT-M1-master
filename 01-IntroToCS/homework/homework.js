'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var str = num.toString();
  var result = 0;
  var expo = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == "1") {
      result += Math.pow(2, expo);
    }
    expo++;
  }
  return result;
}

function DecimalABinario(num) {
  // tu codigo aca

  var bin = [];
  while (num >= 1) {
    bin.push(num % 2);
    num = Math.floor(num / 2);
  }
  return bin.reverse().toString().replace(/,/g, "");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}