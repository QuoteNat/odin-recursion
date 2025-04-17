import { fibs, fibsRec } from "./fibs.js";

for (let i = 1; i <= 10; i++) {
  console.log(
    `fibs(${i}) is [${fibs(i)}] and fibsRec(${i}) is [${fibsRec(i)}]`
  );
}
