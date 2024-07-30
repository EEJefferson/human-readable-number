module.exports = function toReadable(number) {
  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  const str = String(number);

  if (obj[str]) return obj[str];

  if (str.length === 2) {
    const tens = str[0] + '0';
    const units = str[1];
    return `${obj[tens]} ${obj[units]}`;
  }

  if (str.length === 3) {
    const hundreds = obj[str[0]] + ' hundred';
    const tensUnits = str.slice(1);
    if (tensUnits === '00') {
      return hundreds;
    } else if (obj[tensUnits]) {
      return `${hundreds} ${obj[tensUnits]}`;
    } else {
      const tens = tensUnits[0] + '0';
      const units = tensUnits[1];
      return `${hundreds} ${obj[tens]} ${obj[units]}`.replace(/ undefined\s+/g, " ");
    }
  }

  return 'Число вне диапазона';
};
