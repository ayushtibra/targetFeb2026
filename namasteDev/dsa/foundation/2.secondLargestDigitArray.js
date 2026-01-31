var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;

    const arr = s.split('').filter(item => /\d/.test(item))

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            secondLargest = largest; 
            largest = arr[i]; 
        } else if(arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i]
        }
    }

    return Number(secondLargest);
};

secondHighest("sjhtz8344");