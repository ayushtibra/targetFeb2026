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