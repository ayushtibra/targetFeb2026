const maxConsecutiveOne = (nums) => {
    let count = 0;
    let maxCount = 0;
    for(let i=0;i<nums.length;i++ ){
        if(nums[i] == 1){
            count++; // 2
        } else{
            maxCount = maxCount > count ? maxCount : count
            count = 0;
        }
    }

    return count > maxCount ? count : maxCount

    console.log('first', maxCount)
}

const result = maxConsecutiveOne([1,1,0,1,1,1]);