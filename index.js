function hasTargetSum(array, target) {
  // Write your algorithm here
  array = array.sort((a, b) => a - b)
  let i = 0,
    j = array.length - 1
  while (i < j) {
    let sum = array[i] + array[j]
    if (sum > target) {
      j--
    } else if (sum < target) {
      i++
    } else {
      return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  sort array 
  set two pointers i=0 , j= array.length-1
  if array[i]+array[j]>sum => j--
  if array[i]+array[j]<sum => i++
  if array[i]+array[j]==sum => return true
  return false
*/

/*
  Add written explanation of your solution here
  first we sort the array, then we use 2 pointers in the beginning (i) and the end (j) of the array 
  if the sum of two arr[i]+arry[j] bigger than the target value we decrease j value and search for smaller sum
  if the sum of two arr[i]+arry[j] smaller than the target value we increase j value and search for bigger sum
  we continue until find the target sum and return true or when j become less or equal to i in this cas we return false


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
