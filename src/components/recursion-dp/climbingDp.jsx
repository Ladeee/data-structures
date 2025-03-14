//QUESTION
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

import { useState, useEffect } from 'react'

export default function Climbing({ steps }) {
  const [ways, setWays] = useState(0)
  useEffect(() => {
    function climbStairs(n) {
      //this initializes that if there's 1 way of climbing the stairs, then return 1
      //but if it's 2, then return 2
      if (n === 1) return 1
      let prev1 = 1,
        prev2 = 2

      //This updates the step counts until it reaches the n number
      for (let i = 1; i <= n; i++) {
        let current = prev1 + prev2
        prev1 = prev2
        prev2 = current
      }

      return prev2
    }

    setWays(climbStairs(steps))
  }, [steps])
  return (
    <div>
      <h4>Climbing Stairs</h4>
      <p>
        Number of ways to climb steps: <b>{ways}</b>
      </p>
    </div>
  )
}
