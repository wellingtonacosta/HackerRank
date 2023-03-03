function getSecondLargest(nums) {
  const sortedNumbers = nums.sort((a,b )=> a - b)
  let firstLargestNumber = sortedNumbers[0]
  let secondLargestNumber = sortedNumbers[0]
  
  for(let i = 0; i < sortedNumbers.length; i++) {
      if(sortedNumbers[i] > firstLargestNumber) {
          secondLargestNumber = firstLargestNumber
          firstLargestNumber = sortedNumbers[i]
      } else if(sortedNumbers[i] === firstLargestNumber) {
          continue;
      }
  }
  return secondLargestNumber
      
}