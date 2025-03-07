function Hashmap (entries, queries) {
  let phoneBook = new Map()

  for(let entry of entries){
    let [name, phone] = entry.split(" ")
    phoneBook.set(name, phone)
  }

  for (let query of queries) {
    if (phoneBook.has(query)){
      console.log(`${query} = ${phoneBook.get(query)}`)
    } else {
      console.log("Not found")
    }
  }
}