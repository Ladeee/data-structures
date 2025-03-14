//QUESTION: Find 4 numbers in an array that add up to a given target or value.

export default function Foursum(num, target) {
  // loop through i, j, and k to find the suitable triplet combinations
  for (let i = 0; i < num.length - 3; i++){
    for (let j = i + 1; j < num.length - 2; j++){
      const hashMap = {}
      for (let k = j + 1; k < num.length; k++) {
        //subtract the target from i,j,k combination to get the total sum
        const totalSum = target - (num[i] + num[j] + num[k])

        if(totalSum in hashMap) {
          return [i, j, hashMap[totalSum], k]
        }

        hashMap[num[k]] = k
      }
    }
  }

  return []
}

console.log(Foursum([2, 3, 6, 8, 9], 19))
console.log(Foursum([4, 2, 1, 9, 3], 15))
console.log(Foursum([9, 1, 8, 6, 2], 20))
