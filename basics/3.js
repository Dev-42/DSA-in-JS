// count the number of digits of a number
const digits = (num) => {
  num = Math.abs(num);
  let count = 0,
    rem = 0;
  while (num > 0) {
    rem = num % 10;
    count += 1;
    num = Math.floor(num / 10);
  }
  console.log(count);
};
digits(1234);
