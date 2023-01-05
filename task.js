"use strict";

function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    return [discriminant]
  } else if (discriminant === 0) {
    return [-b / (2 * a)]
  } else if (discriminant > 0) {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
  }
  return "нет решения"
}

const calc = solveEquation(2, -1, -15)
console.log(calc)