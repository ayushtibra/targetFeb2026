function MissingNumberArray(nums) {
    const range = nums.length;
    const numberInRange = {};

    for (let i = 0; i <= range; i++) {
        numberInRange[i] = false
    }

    for (let i = 0; i < nums.length; i++) {
        if (!numberInRange[nums[i]]) {
            numberInRange[nums[i]] = true
        }
    }

    let missing;

    for (const key in numberInRange) {
        if (numberInRange[key] === false) {
            missing = Number(key);
            break;
        }
    }

    return missing

    console.log('first', missing)

}

MissingNumberArray([3, 0, 1]);

https://leetcode.com/problems/missing-number/description/
// topic - hash table