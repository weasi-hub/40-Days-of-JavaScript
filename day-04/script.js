// Ternary condition

let age = 25;

let message = age >= 18 ? "You're eligible to vote" : "You're not";

console.log(message);

// if executes all conditions

let mark = 85;

if (mark >= 90) {
  console.log("Grade A+");
}

if (mark >= 80) {
  console.log("Grade A");
}

if (mark >= 70) {
  console.log("Grade B");
}

// if else executes one condition then stopped

let marks = 85;

if (marks >= 80) {
  console.log("Grade A+");
} else if (marks >= 70) {
  console.log("Grade A");
} else if (marks >= 65) {
  console.log("Grade B");
}

// switch case, too many conditions with fixed value

let marks_ = 85;

switch (marks_) {
  case 90:
    console.log("Grade A+");
    break;

  case 80:
    console.log("Grade A");
    break;

  case 70:
    console.log("Grade A-");
    break;

  default:
    console.log("Nothing is matched");
}

let userName = "Weasi";

switch (userName) {
  case "Weasi":
    console.log("Mr. Husband");
    break;

  case "Shimu":
    console.log("Wifey");
    break;

  default:
    console.log("Invalid name");
}

let number = 8;

switch (number) {
  case 1:
    console.log("Friday");
    break;
  case 2:
    console.log("Saturday");
    break;
  case 3:
    console.log("Sunday");
    break;
  case 4:
    console.log("Monday");
    break;
  case 5:
    console.log("Tuesday");
    break;
  case 6:
    console.log("Wednesday");
    break;
  case 7:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid date number");
}

// Day 04 - Task

// 1

console.log("It's a normal day");

// 2

let cash = 1500;

if (cash % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// Ternary Operator

cash % 500 === 0
  ? console.log("Withdrawal successful")
  : console.log("Invalid amount");

// 3

let operator = "%";

switch (operator) {
  case "+":
    console.log(100 + 50);
    break;
  case "-":
    console.log(100 - 50);
    break;
  case "*":
    console.log(100 * 50);
    break;
  case "/":
    console.log(100 / 50);
    break;
  case "%":
    console.log(100 % 50);
    break;
  default:
    console.log("Invalid character");
}

// 4

let personAge;

if (personAge < 18) {
  console.log("Ticket price is $3");
} else if (personAge >= 18 && personAge <= 60) {
  console.log("Ticket price is $10");
} else {
  console.log("Ticket price is $8");
}

// 5

let monthOfBirth;

switch (monthOfBirth) {
  case "january":
    console.log("Your zodiac sign is Capricorn");
    break;
  case "february":
    console.log("Your zodiac sign is Aquarius");
    break;
  case "march":
    console.log("Your zodiac sign is Aries");
    break;
  case "april":
    console.log("Your zodiac sign is Taurus");
    break;
  case "may":
    console.log("Your zodiac sign is Gemini");
    break;
  case "june":
    console.log("Your zodiac sign is Cancer");
    break;
  case "july":
    console.log("Your zodiac sign is Leo");
    break;
  case "august":
    console.log("Your zodiac sign is Virgo");
    break;
  case "september":
    console.log("Your zodiac sign is Libra");
    break;
  case "october":
    console.log("Your zodiac sign is Scorpio");
    break;
  case "november":
    console.log("Your zodiac sign is Sagittarius");
    break;
  case "december":
    console.log("Your zodiac sign is Capricorn");
    break;
  default:
    console.log("Please enter a valid month name.");
}

// 6

let sidesOfTriangle = "All sides different";

switch (sidesOfTriangle) {
  case "All sides equal":
    console.log("Equilateral Triangle.");
    break;
  case "Two sides equal":
    console.log("Isosceles Triangle.");
    break;
  case "All sides different":
    console.log("Scalene Triangle.");
    break;
  default:
    console.log("Invalid input");
}
