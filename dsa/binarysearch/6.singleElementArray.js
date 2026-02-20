function singleNonDuplicate(nums){
    for(let i = 0; i < nums.length; i = i+2){
        if((nums[i] - nums[i+1]) != 0){
            return nums[i];
        }
    }
}

const result = singleNonDuplicate([2,3,3,4,4,8,8]);
console.log('first', result)

// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

// Not able to solve using bingary search