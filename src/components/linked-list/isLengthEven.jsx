//QUESTION: Check if the length of the linkedlist is even or odd

import { useEffect, useState } from 'react'

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {
                value: 8,
                next: {
                  value: 9,
                  next: {
                    value: 2,
                    next: {
                      value: 3,
                      next: {
                        value: 6,
                        next: {
                          value: 6,
                          next: null, // End of the list
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default function IsLengthEven() {
  const [linkedLength, setLinkedLength] = useState(null)
  const [isEven, setIsEven] = useState(false)
  //Starts from the head of the list
  const head = list

  //As you go from one node to the other, keep count of the nodes by adding them to count
  useEffect(() => {
    if (head) {
      let count = 0
      let current = head

      while (current) {
        count++
        current = current.next
      }

      console.log('count is:', count)
      setLinkedLength(count)
    }
  }, [head])

  //Check if the list length is divisible or not. this should run everytime 
  //the linkedlist is mounted
  useEffect(() => {
    if (linkedLength !== null) {
      console.log('linked length:', linkedLength)

      if (linkedLength % 2 === 0) {
        console.log('even')
      } else {
        console.log('odd')
      }
      setIsEven(linkedLength % 2 === 0)
    }
  }, [linkedLength])

  return (
    <div>
      {linkedLength !== null && (
        <>
          <p>Linked list total length: {linkedLength}</p>
          <p>
            The length is <b>{isEven ? 'even' : 'odd'}</b>
          </p>
        </>
      )}
    </div>
  )
}
