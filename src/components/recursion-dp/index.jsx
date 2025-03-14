//QUESTION: Get the common integer that can divide both numbers, num1 and number2
//Also get the greatest common divisor

import { useState, useEffect } from 'react'
import Palindrome from './palindrome'
import Climbing from './climbingDp'

export default function GCDComponent() {
  const [result, setResult] = useState(null)
  const [gcdResult, setGcdResult] = useState(null)

  useEffect(() => {
    function greatest(num1, num2) {
      let gcdBox = []
      //this is to make sure not to loop through more than the minimum number
      let mini = Math.min(num1, num2)

      //loop through the mini and push the integers that can divide both numbers
      for (let i = 1; i <= mini; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
          gcdBox.push(i)
        }
      }

      return gcdBox.join(', ')
    }

    function gcd(num1, num2) {
      while (num2 !== 0) {
      [num1, num2] = [num2, num1 % num2]
      }
      return num1
    }

    const calculatedGCD = greatest(56, 98)
    setResult(calculatedGCD)
    setGcdResult(gcd(56, 98))
  }, [])

  return (
    <div className='wrapper'>
      <h2>Greatest Common Divisor (GCD)</h2>
      {result !== null ? (
        <p>
          List of numbers that can divide both integers without remainders:{' '}
          <b>{result}</b>
        </p>
      ) : (
        <p>Calculating...</p>
      )}
      <p>
        Greatest common divisor is: <b>{gcdResult}</b>
      </p>

      <div>
        <h3>Dynamic programming</h3>
        <Palindrome />
        <Climbing />
      </div>
    </div>
  )
}
