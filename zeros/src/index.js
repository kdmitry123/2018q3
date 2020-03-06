module.exports = function getZerosCount(number) {
  let five = 0;
  let num;
  do {
    num = number;
    while (num % 5 === 0) {
      num = num / 5;
      five++;
    }
    number = number - 1;
  }
  while (number > 0)
  return five;
}
