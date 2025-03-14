//QUESTION: Sort through the numbers and identify the sum of
// 3 numbers that can be added to get the target or at least close to the target.

export default function Sort() {
  const nums = [-1, 2, 1, -4]
  const target = 1

  function ClosestThreeNumbers() {
    // Helps arrange in ascending order, from -4 to 2
    nums.sort((a, b) => a - b)
    let closestSum = Infinity

    // loop through the array of numbers to find the first number closest to the target
    //  and give a space for 2 more numbers to make it triplet.
    for (let i = 0; i < nums.length - 2; i++) {
      // starts after the first number is selected
      let left = i + 1,
        // the last number start at the end of the array
        right = nums.length - 1
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right]
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum
        }
        if (sum < target) {
          left++
        } else if (sum > target) {
          right--
        } else {
          return sum
        }
      }
    }

    return closestSum
  }

  const result = ClosestThreeNumbers()

  return (
    <div>
      Closest Sum of numbers to the target is: {result}
    </div>
  )
}

