"use strict";

// Написать программу, которая будет решать квадратное уравнение вида ax^2 + bx + c = 0
// переменные a, b, c задаются в коде, нужно найти x и дать ответ в зависимости от результата:
// — “корни уравнения: х1 = %ваш ответ 1%, х2 = %ваш ответ 2%
// — “корень уравнения повторяется и равен %ваш ответ%
// — “у уравнения нет корней”

const a = prompt("Введите коэффициент а: ");
const b = prompt("Введите коэффициент b: ");
const c = prompt("Введите коэффициент c: ");

let D = b ** 2 - 4 * a * c;

if (a !== 0 && b !== 0 && c !== 0) {
  if (D > 0) {
    let x1 = (-b + D ** (1 / 2)) / (2 * a);
    let x2 = (-b - D ** (1 / 2)) / (2 * a);
    console.log(`Корни уравнения: х1 = ${x1}, х2 = ${x2}`);
  } else if (D === 0) {
    let x = -b / (2 * a);
    console.log(`Корень уравнения повторяется и равен ${x} `);
  } else {
    console.log("У уравнения нет корней");
  }
} else if (b === 0) {
  if (-c / a >= 0) {
    let x3 = (-c / a) ** (1 / 2);
    let x4 = -1 * (-c / a) ** (1 / 2);
    console.log(`Корни уравнения: х1 = ${x3}, х2 = ${x4}`);
  } else {
    console.log("У уравнения нет корней");
  }
} else {
  let x5 = 0;
  let x6 = -b / a;
  console.log(`Корни уравнения: х1 = ${x5}, х2 = ${x6}`);
}
