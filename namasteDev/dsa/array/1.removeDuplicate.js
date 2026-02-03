function removeDuplicate(nums) {
    let j = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;

    // or``

    // const seen = {};
    // const result = [];

    // for (let num of arr) {
    //     if (!seen[num]) {
    //         seen[num] = true;
    //         result.push(num);
    //     }
    // }
    // return result;

    // or

    // const unique = [...new Set(arr)];

}

const result = removeDuplicate([1, 1, 2]);
console.log('first', result)
// Topic - two pointers