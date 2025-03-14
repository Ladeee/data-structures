//QUESTION: Search through the array of numbers,
//and locate the index of the target being searched for

import { useState, useEffect } from 'react'

export default function Search() {
  const [foundIndex, setFoundIndex] = useState(null)

  useEffect(() => {
    const nums = [1, 2, 4, 0, 9, -1, -5, 8, 6, 3]
    const target = 8

    //Loop through the numbers and if the target we are looking for is found
    //then return the index, if not just return -1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        console.log(`Target found at index: ${i}`)
        setFoundIndex(i)
        return
      }
    }
    console.log('Target not found')
    setFoundIndex(-1)
  }, [])

  return (
    <div>
      <h4>Search</h4>
      {foundIndex !== null && (
        <div>
          {foundIndex !== -1
            ? `Target is at index ${foundIndex}`
            : 'Target not found, so -1 then.'}
        </div>
      )}
    </div>
  )
}
