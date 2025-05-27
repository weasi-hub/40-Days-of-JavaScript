// Task 1
let a = 5;
let sum = 5 / 2;

if ((sum = 0)) {
  console.log("5 is an even number.");
} else {
  console.log("5 is an odd number.");
}

// Task 2

let age = 26;

if (age >= 18) {
  console.log("You're eligible to get a driving lisence.");
} else {
  console.log("You're not eligible to get a driving lisence.");
}

// Task 3

let myMonthlySalary = 12300;
let myAnnualSalary = myMonthlySalary * 12;

console.log(myAnnualSalary + myAnnualSalary * (20 / 100));

// Task 4

let color = "Green";

if (color === "Red") {
  console.log("It's Red, STOP!");
} else {
  console.log("It's Green, GO!");
}

// Task 5

let units = 5;
let monthlyCost = units * 150 * 30;

console.log(monthlyCost);

let annualUnitsCost = units * 150 * 365;
let annualPayment = annualUnitsCost - annualUnitsCost * (20 / 100);

console.log(annualPayment);

// Task 6

let year = 2025;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a 'Leap Year'");
} else {
  console.log(year + " isn't a 'Leap Year'");
}

// Task 7

let p = 7;
let q = 3;
let r = 9;

let max;

if (p > q && p > r) {
  max = p;
} else if (q > p && q > r) {
  max = q;
} else {
  max = r;
}

console.log(max);

// Task 8 

let count = 5; 

// The binary of 5 is 00000101, double of 5 is 10.
// The binary of 10 is 00001010, so we have to left shift by 1bit to get 00001010 i.e. 10

console.log(count << 1);
