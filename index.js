import { fibs, fibsRec } from "./fibs.js";

const testFibs = 8;

console.log(
  `fibs(${testFibs}) is [${fibs(
    testFibs
  )}] and fibsRec(${testFibs}) is [${fibsRec(8)}]`
);
