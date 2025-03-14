//Create a phone book with given names, and phone numbers.
//The phone numbers should be searched with a given key(key is not case sensitive)
import { useState } from 'react'

export default function PhoneBooth() {
  const [hashMap] = useState(
    new Map([
      ['Alice', '08063089038'],
      ['Bam', '09063229033'],
      ['Dave', '07063219043'],
      ['Matt', '08163909045'],
      ['Mark', '09163013032'],
      ['Praise', '07063309060'],
      ['Patrick', '09090089009'],
      ['Trust', '08063309056'],
      ['Success', '08123089019'],
    ]),
  )

  const [searchKey, setSearchKey] = useState('')
  const [output, setOutput] = useState([])

  const handleSearch = () => {
    const keyInsensitivity = searchKey.toLowerCase()
    let phoneNumber = null

    //go through the keys and store found keys in phoneNumber, then stop the loop
    for (const key of hashMap.keys()) {
      if (key.toLowerCase() === keyInsensitivity) {
        phoneNumber = hashMap.get(key)
        break
      }
    }

    if (phoneNumber) {
      console.log(`${searchKey} =${phoneNumber}`)
      setOutput(`${searchKey} = ${phoneNumber}`)
    } else {
      console.log('Not found')
      setOutput('Not found')
    }

    setSearchKey('')
  }

  return (
    <div>
      <h3>Phone book</h3>
      <input
        className="input"
        type="text"
        placeholder="Enter name..."
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <p>{output}</p>
      </div>
    </div>
  )
}
