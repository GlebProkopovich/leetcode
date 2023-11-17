// Conditions
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// My solution
function majorityElement(nums: number[]): any {
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums.filter((num) => num === nums[i]).length > n / 2) return nums[i];
  }
}

// Best practise
function majorityElementFn(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// console.log(majorityElementFn([1, 1, 1, 2, 2, 9, 0, 6, 6, 6, 6, 6, 6, 6, 6]));
