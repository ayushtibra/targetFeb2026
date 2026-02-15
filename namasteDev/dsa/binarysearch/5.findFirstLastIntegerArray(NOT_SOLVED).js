function searchRange(nums, target){
    for(let i = 0; i <nums.length; i++){
        if(nums[i] == target){
            return [i, i+1];
        }
    }

    return [-1, -1];
}

const result = searchRange([5,7,7,8,8,10],8);
console.log('result', result)

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
// Not able to solve using bingary search