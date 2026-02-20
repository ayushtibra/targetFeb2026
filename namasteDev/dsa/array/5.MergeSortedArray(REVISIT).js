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

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2
  const len1 = arr1.length;
  const len2 = arr2.length;

  // While both arrays have elements to compare
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < len1) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < len2) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8, 10];
const merged = mergeSortedArrays(array1, array2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 10]
