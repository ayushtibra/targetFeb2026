function searchRange(nums, target){
    let map = {};

    for(let i = 0; i <nums.length; i++){
        if(nums[i] == target && map[target] == undefined){
            map[target] = i;
        } else if( nums[i] == target){
            return [map[target], i]
        }
    }
    console.log('first', map)
    if((map[target] == 0) || map[target] ){
        return [map[target], map[target]]
    }

    return [-1, -1];
}

const result = searchRange([1,2,3],2);
console.log('result', result)

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
// Not able to solve using bingary search or brute force