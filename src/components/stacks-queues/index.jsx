//QUESTION: Check if the given brackets have corresponding open and close bracket

import { useState, useEffect } from 'react'
import Queue from './queue'

function Stacks(s) {
  //initialize stack as an empty array
  const stack = []
  const pairs = { ')': '(', '}': '{', ']': '[' }

  //for every character found in s, it checks if an open bracket matches with a closing bracket
  //if it doesn't match, it pops it out, else it pushes it into the stack
  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) return false
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}

export default function StacksQueues() {
  const [showStack, setShowStack] = useState([])

  //list of different instances
  useEffect(() => {
    const results = [
      `() is ${Stacks('()')}`,
      `(} is ${Stacks('(}')}`,
      `[] and {} are both ${Stacks('[]{}')}`,
      `([)] are ${Stacks('([)]')}`,
      `{[]} are ${Stacks('{[]}')}`,
    ]

    setShowStack(results)
  }, [])

  return (
    <div className='wrapper'>
      <h2>Stacks and Queues</h2>
      <div>
        {showStack.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
      <div><Queue /></div>
    </div>
  )
}
