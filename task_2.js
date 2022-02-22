function prime_number_test(num) {
  if (num > 1000) {
    return "error";
  };
  if (num < 2) {
    return false;
  };
  let s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) {
    if (num % i === 0) {
      return false;
    };
  };
  return true;
};

let result = prime_number_test(1001);

if (result === "error") {
  console.log("Данные не верны");
} else if (result === true) {
  console.log("Число простое");
} else if (result === false) {
  console.log("Число не простое");
};

// Или сразу так:
function prime_number_test2(num) {
  if (num > 1000) {
    console.log("Данные не верны");
    return;
  };
  if (num < 2) {
    console.log("Число " + num + " не простое");
    return;
  };
  let s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) {
    if (num % i === 0) {
      console.log("Число " + num + " не простое");
      return;
    };
  };
  console.log("Число " + num + " простое");
  return;
};

prime_number_test2(2);


/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
является ли оно простым, и выводит простое число или нет. Если введено больше 1 000,
то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/

/* Простое число — это натуральное (целое положительное) число, большее единицы, имеющее
только два натуральных делителя. Другими словами, это число не делится ни на какое другое
число, кроме самого себя и единицы.
Список простых чисел от 1 до 1000: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307.
*/
