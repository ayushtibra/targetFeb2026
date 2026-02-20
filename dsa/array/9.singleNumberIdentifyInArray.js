function SingleNumberIdentifyInArray(nums){
    const mapNumber = {};

    for(let i = 0; i < nums.length; i++){
        if(!mapNumber[nums[i]]){
            mapNumber[nums[i]] = 1
        } else { 
            mapNumber[nums[i]] = mapNumber[nums[i]] + 1
        }
    }

    for (let num in mapNumber) {
        if(mapNumber[num] == 1){
            return num;
        }
    }
}

const result = SingleNumberIdentifyInArray([4,1,2,1,2]);
console.log('first', result)

// https://leetcode.com/problems/single-number/description/
// Topic - hashtable