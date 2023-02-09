function getSecondLargest(nums) {
    // Complete the function
    nums.sort()
    return nums[nums.length - 3]
}