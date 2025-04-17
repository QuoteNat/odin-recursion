import { fibs, fibsRec } from "./fibs.js";
import { mergesort } from "./mergesort.js";

for (let i = 1; i <= 10; i++) {
  console.log(
    `fibs(${i}) is [${fibs(i)}] and fibsRec(${i}) is [${fibsRec(i)}]`
  );
}

let comparator = (left, right) => {
  return left < right;
};

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1], comparator));
console.log(mergesort([105, 79, 100, 110], comparator));
