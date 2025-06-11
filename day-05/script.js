/*
for (initialization; condition; update) {
    code
}

initialization - how or from where the loop will be started.

condition - based on which condition the loop will be run. 

update - how to update the value so that the loop can move forward.



for (let count = 1; count <= 5; count++) {
  console.log("Loop", count);
}

*/

// Task

// 1

for (let n = "*"; n <= "*"; n++) {
  console.log(n);
  for (let m = "*"; m <= "*"; m++) {
    console.log(n, m);
    for (let o = "*"; o <= "*"; o++) {
      console.log(n, m, o);
      for (let p = "*"; p <= "*"; p++) {
        console.log(n, m, o, p);
        for (let q = "*"; q <= "*"; q++) {
          console.log(n, m, o, p, q);
        }
      }
    }
  }
}

// 2

let num = 5;
for (a = 1; a <= 10; a++) {
  console.log(num * a);
}

// 3

let sum = 0;

for (let oddNum = 1; oddNum <= 500; oddNum++) {
  if (oddNum % 2 !== 0) {
    sum = sum + oddNum;
  }
}

console.log(sum);

// 4

for (let b = 1; b <= 20; b++) {
  if (b % 3 === 0) continue;
  console.log(b);
}

// 5

for (let reverseNum = 6789; reverseNum <= 9876; reverseNum++) {
  if (reverseNum === 9876) {
    console.log(reverseNum);
  }
}

// 6 

// differences between for, while and do while loop with flow charts described in index.html


