function peakIndexInMountainArray(arr){
    let l=0;
    let r=arr.length-1;
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return mid;

        if(arr[mid]<arr[mid+1]) l=mid ;

        else if(arr[mid]>arr[mid+1]){
            r=mid;
        }

    }
    return mid;

    // or

    // let left = 1; // 1 2
    // let right = arr.length; // 3 2

    // while(left < right){
    //     let mid = Math.floor((left + right) / 2); // 2 1
    //     if(arr[mid - 1] > arr[mid]){
    //         right = mid; // 2
    //     } else {
    //         left = mid + 1 // 2
    //     }
    // }

    // return right - 1
}

peakIndexInMountainArray([0,4,16,10,5,2])

// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/