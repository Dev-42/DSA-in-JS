// palindrome number
const isPalindrome = (num) => {
  let copyNum = num,
    revNum = 0;

  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    revNum = revNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  return revNum == num;
};
console.log(isPalindrome(1234));
