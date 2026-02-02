function BinarySearch(arr, target){
    const middleArrIndex = Math.floor(arr.length / 2);

    for(let i=(arr[middleArrIndex] < target ? middleArrIndex : 0); i < (arr[middleArrIndex] < target ? arr.length : middleArrIndex+1 ); i++ ){
        if(arr[i] == target){
            return i
        }
    }

    return -1;

}

const result = BinarySearch([-1,0,3,5,9,12], 2);
console.log('result', result)

// https://leetcode.com/problems/binary-search/description/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.