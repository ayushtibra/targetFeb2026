function largestNumberArray(arr) {
    if (!Array.isArray(arr)) return false;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "number" || !Number.isFinite(arr[i])) {
            return false;
        }
    }

    if (arr.length == 0) {
        return null;
    }

    let largest = -999999999999999;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i]
        }
    }

    return largest

}

const result = largestNumberArray([-1,-2,-3]);
console.log('res', result)