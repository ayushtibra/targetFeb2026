function MergeSortedArray(nums1,m,nums2,n){
    let i = m - 1; // 2  
    let j = n - 1;    // 2 
    let k = m + n - 1; // 5

    while (j >= 0) { // 2,1, 0
        if (i >= 0 && nums1[i] > nums2[j]) {  // 3 > 6, 3 > 5, 3 > 2, 2 > 2
            nums1[k] = nums1[i]; // [1,2,3,3,5,6]
            i--;
        } else {
            nums1[k] = nums2[j]; // [1,2,3,0,0,6], [1,2,3,0,5,6], [1,2,2,3,5,6]
            j--;
        }
        k--;
    }

}

const result = MergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3);
console.log(result);

// https://leetcode.com/problems/merge-sorted-array/description/
// Topics - two pointers