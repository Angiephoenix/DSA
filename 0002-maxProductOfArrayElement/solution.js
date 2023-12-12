/**
 * @param {number[]} nums
 * @return {number}
 */

let maxProduct = function(nums) {
   nums.sort((a,b) => a-b)
   
  let i = nums[nums.length - 1]
  let j = nums[nums.length - 2]

  return (i - 1) * (j - 1) 
};