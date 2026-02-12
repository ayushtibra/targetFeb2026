function twoSum(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i+1];
        }
        map[nums[i]] = i + 1;
    }
}

const result = twoSum([2, 7, 11, 15], 9);
console.log('first', result)