//QUESTION: Simply sort the numbers in an ascending manner

import Search from "./search"
import Sort from "./sort"

export default function SearchSort() {
  //This simply sort through the array of numbers and return it in an ascending form
  const nums = [2, 1, 4, 0, 5, 3, 9, 6, 10, 7, 8]
  nums.sort((a,b) => a-b)
  console.log(nums)
  return (
    <div className="wrapper">
      <h4>Sorting</h4>
      Basic Sorting: {nums.join(", ")}
      <Sort />
      <Search />
    </div>
  )
}