export function mergesort(array, comparisonFunc) {
  // base case
  if (array.length == 1) return array;

  let middle = Math.round(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  left = mergesort(left, comparisonFunc);
  right = mergesort(right, comparisonFunc);

  let sorted = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    if (comparisonFunc(left[indexLeft], right[indexRight])) {
      sorted.push(left[indexLeft]);
      indexLeft += 1;
    } else {
      sorted.push(right[indexRight]);
      indexRight += 1;
    }
  }

  if (indexLeft < left.length) {
    while (indexLeft < left.length) {
      sorted.push(left[indexLeft]);
      indexLeft += 1;
    }
  }
  if (indexRight < right.length) {
    for (let i = indexRight; i < right.length; i++) {
      sorted.push(right[indexRight]);
      indexRight += 1;
    }
  }
  return sorted;
}
