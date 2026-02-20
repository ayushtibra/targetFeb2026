function mySqrt(x){
    if(x == 0) return 0;
    let left = 1;
    let right = x;

    while(left <= right){
        let middleNum = Math.floor((left+right)/2);
        if((middleNum * middleNum) == x ) return middleNum;
        if((middleNum * middleNum) > x)  right = middleNum - 1;
        if((middleNum * middleNum) < x)  left = middleNum + 1;
    }

    return right
}

const result = mySqrt(9);
console.log('first',result)

// https://leetcode.com/problems/sqrtx/description/