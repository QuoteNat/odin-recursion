/**
 * An iterative fibonacci function
 * @param {int} number Number of fibonacci elements to calculate
 * @returns An array with number elements of the fibonacci sequence.
 */
export function fibs(number) {
  let sequence = [];
  for (let i = 0; i < number; i++) {
    if (i == 0) {
      sequence.push(0);
    } else if (i == 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

/**
 * A recursive fibonacci function
 * @param {int} number Number of fibonacci elements to calculate
 * @returns An array with number elements of the fibonacci sequence.
 */
export function fibsRec(number) {
  if (number == 1) {
    return [0];
  } else if (number == 2) {
    return [0, 1];
  }

  let sequence = fibsRec(number - 1);

  return sequence.concat([sequence[number - 2] + sequence[number - 3]]);
}
