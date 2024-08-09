function iterateAndSum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

// Przykładowy input:
const input1 = iterateAndSum([1, 2, 3]);
const input2 = iterateAndSum([10, 10, 10, 10]);
console.log(input1, input2);
