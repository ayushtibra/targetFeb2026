function removeDuplicate(nums) {
    let j = 1
    // [1,1,2]
    for(let i = 1; i<nums.length; i++){
        if(nums[i-1] != nums[i]){
            nums[j] = nums[i];
            j++
        }
    }

    console.log('first', nums)

    return j;

    // or``

    // const seen = {};
    // const result = [];

    // for (let num of nums) {
    //     if (!seen[num]) {
    //         seen[num] = true;
    //         result.push(num);
    //     }
    // }
    // return result;

    // or

    // const unique = [...new Set(nums)];

}

const result = removeDuplicate([1, 1, 2, 3, 3]);
console.log('first', result)

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Topic - two pointers