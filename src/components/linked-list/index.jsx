// QUESTION: Go through the links, divide each node by 2 and
//  determine if it is divisible or not(that is, with no remainder)

import { useEffect } from 'react'
import Linked from './isLengthEven'

export default function LinkedList() {
  // Basic knowledge of link

  //Different node value is being defined with the next linking one node to the other
  useEffect(() => {
    const node1 = { value: 10, next: null }
    const node2 = { value: 30, next: null }
    const node3 = { value: 45, next: null }
    const node4 = { value: 55, next: null }

    node1.next = node2
    node2.next = node3
    node3.next = node4

    //Current starts from the head
    let current = node1

    //After the current node is divided by 2, go to the next node.
    //if any of the node is divisible, return even, and if not, return false

    while (current !== null) {
      if (current.value % 2 === 0) {
        console.log(`${current.value} is even/true`)
      } else {
        console.log(`${current.value} is odd/false`)
      }
      current = current.next
    }
  }, [])

  return (
    <div className="container">
      <h2>Linked list</h2>
      <Linked />
    </div>
  )
}
