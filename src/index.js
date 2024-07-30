module.exports = function toReadable (number) {
  const via = {
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
    let str = number.toString();
    if(via[str]) return via[str];
    if(str.length===2) return `${via[str[0+'0']]} ${via[str[1]]}`;
    if (str.slice(-2) == "00") return `${via[str[0]]} hundred`;
    if (str.length===3&&str.slice(-1)!=='0') {
        return `${via[str[0]]} hundred ${via[str[1]+'0']} ${via[str[2]]}`
    } else if(str.length===3&&str.slice(-1)=='0'){
        return `${via[str[0]]} hundred ${via[str[1]+'0']}`
    } else if(str[1]==='0'){
        return `${via[str[0]]} hundred ${via[str[2]]}`
    }
}
