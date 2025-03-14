// Task:
// Given an array of integers nums and an integer target,
// return the indices of the two numbers that add up to target.

export default function twoSum(nums, target) {
  const hashMap = {}

  //loop through the array of numbers, calculate the remaining sum needed
  //by subtracting i ffrom the target. then check if the remaining sum is in hashmap
  //if it is, it returns the numbers index, if not it adds to the hashmap
  for (let i = 0; i < nums.length; i++) {
    const remainingSum = target - nums[i]
    if (remainingSum in hashMap) {
      return [hashMap[remainingSum], i]
    }
    hashMap[nums[i]] = i
  }

  return []
}
console.log(twoSum([2, 7, 11, 15], 9)) // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)) // Output: [1, 2]
console.log(twoSum([3, 7], 10)) // Output: [0, 1]
