function twoSum(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

const result = twoSum([2, 7, 11, 15], 18);
console.log('first', result)

// https://leetcode.com/problems/two-sum/description/