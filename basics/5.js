// fibonacci numbers
const fib = (num) => {
  if (num <= 1) {
    return num;
  }
  let ans = fib(num - 1) + fib(num - 2);
  return ans;
};
console.log(fib(4));

// 0 1 1 2 3 5
