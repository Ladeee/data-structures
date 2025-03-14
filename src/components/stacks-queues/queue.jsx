// You are given an array of integers nums, there is
// a sliding window of size k which is moving from the
// very left of the array to the very right. You can only
// see the k numbers in the window. Each time the sliding
// window moves right by one position.

import { useState, useEffect } from 'react'

export default function Queue() {
  const [result, setResult] = useState([])

  useEffect(() => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7]
    //This means you can slide the windows to check 3 numbers at once
    const k = 3
    let queueBox = []
    let tempResult = []

    //loops through the nums array and check if the queueBox is not empty,
    // and not lesser than the current index. if it is, it pops it out and go to the next number
    // else it pushes it in the queueBox
    for (let i = 0; i < nums.length; i++) {
      if (queueBox.length > 0 && queueBox[0] < i - k + 1) {
        queueBox.shift() // Pop from the front
      }

      while (
        queueBox.length > 0 &&
        nums[queueBox[queueBox.length - 1]] < nums[i]
      ) {
        queueBox.pop() // Pop from the back
      }
      queueBox.push(i)

      //It adds the largest number in the current window to tempResult once the window
      // reaches size k which is 3. The largest number is pushed to the front of queueBox.
      if (i >= k - 1) {
        tempResult.push(nums[queueBox[0]])
      }
    }

    setResult(tempResult)
  }, [])

  return (
    <div>
      <h2>Queue</h2>
      <div>
        {result.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </div>
    </div>
  )
}
