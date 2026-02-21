function twoSum(nums, target) {
    // const map = {}
    // for (let i = 0; i < nums.length; i++) {
    //     const complement = target - nums[i];

    //     if (map[complement] !== undefined) {
    //         return [map[complement], i];
    //     }
    //     map[nums[i]] = i;
    // }

    // or

    let hashMap = {};
    let index = 0;
    while(index < nums.length){
        let diff = target - nums[index];
        if(hashMap[diff] !== undefined){
            return [index,hashMap[diff]];
        }
        hashMap[nums[index]] = index;
        index++;
    }
}

const result = twoSum([2, 7, 11, 15], 18);
console.log('first', result)

// https://leetcode.com/problems/two-sum/description/
// Hash Map or hash table