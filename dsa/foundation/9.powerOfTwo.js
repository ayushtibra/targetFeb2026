function powerOfTwo(n){
    if(n < 1) return false;

    while(n > 1){
        if(n % 2 == 0){
            n = n / 2;
        } else{
            return false;
        }
    }

    return true
}

const result = powerOfTwo(16);
console.log(result);

// https://leetcode.com/problems/power-of-two/

// topic = recursion or bit manipulation