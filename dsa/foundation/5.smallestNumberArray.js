function smallestNumberArray(arr){
    if (!Array.isArray(arr)) return false;

    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] != "number" || !Number.isFinite(arr[i])){
            return false;
        }
    }

    if(arr.length == 0){
        return null;
    }

    let smallest = 999999999999999
    for(let i = 0; i< arr.length;i++){
        if(arr[i] < smallest ){
            smallest = arr[i]
        }
    }
    
    return smallest

}

const result = smallestNumberArray([-4,-1,2,3]);
console.log('res',result)

// https://namastedev.com/practice/find-smallest-number