// missing number in the array
const missingNum = (nums) => {
  let n = nums.length;
  let expectedTotal = (n * (n + 1)) / 2;
  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += nums[i];
  }
  return expectedTotal - currentSum;
};
console.log(missingNum([1, 2, 0, 4]));
