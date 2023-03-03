// 1) Вивести на сторінку в один рядок через кому числа від 10 до 20.

let array = [];

for (let i = 10; i <= 20; i++) {
  array.push(i);
}
console.log(array.join());

// 2) Вивести квадрати чисел від 10 до 20.

let arraySquare = [];

for (let i = 10; i <= 20; i++) {
  arraySquare.push(i**2);
}
console.log(arraySquare.join());

// 3) Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
  console.log(`${i}*7 = ${i*7}`);
}

// 4) Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

// 5) Знайти добуток усіх цілих чисел від 15 до 35.

let product = 1;

for (let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);

// 6) Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let numeratorSum = 0;

for (let i = 1; i <= 500; i++) {
  numeratorSum += i;
}
console.log(numeratorSum / 500);

// 7) Вивести суму лише парних чисел в діапазоні від 30 до 80.

let evenSum = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(evenSum);

// 8) Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let numArray = [];

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    numArray.push(i);
  }
}
console.log(numArray.join());


// 9) Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10) Визначити кількість його парних дільників.
// 11) Знайти суму його парних дільників.

let number = 444;
let dividerArray = [];
let evenDivQuantity = 0;
let evenDivSum = 0;

for (let divider = 1; divider <= number; divider++) {
  if (number % divider === 0) {
    dividerArray.push(divider);
    if (divider % 2 === 0) {
      evenDivQuantity++;
      evenDivSum += divider;
    }
  }  
}
console.log(dividerArray.join());
console.log(evenDivQuantity);
console.log(evenDivSum);

// 12) Надрукувати повну таблицю множення від 1 до 10.

for (let multiplied = 1; multiplied <= 10; multiplied++) {
  for (let factor = 1; factor <= 10; factor++) {
    console.log(`${multiplied}*${factor} = ${multiplied*factor}`);
  }
}
