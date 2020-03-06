module.exports = function solveEquation(equation) {
  let array = equation.split(' * ');
  let part1 = array[1].split(' ');
  let b = +(part1[1] + part1[2]);
  let a = +array[0];
  let part2 = array[2].split(' ');
  let c = +(part2[1] + part2[2]);
  let discriminant = b * b - 4 * a * c;
  discriminant = Math.round(Math.sqrt(discriminant));
  let x = (-b - discriminant) / (2 * a);
  let y = (-b + discriminant) / (2 * a);
  if (x < y) {
    return [x, y];
  } else {
    return [y, x];
  }
}
