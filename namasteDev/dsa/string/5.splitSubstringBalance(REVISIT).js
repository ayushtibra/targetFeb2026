function balancedStringSplit(s){
    let count = 0;

    let rCount = 0;
    let lCount = 0;
    
    for(let i =0 ; i< s.length; i++){
        if(s[i] == 'R'){
            rCount += 1;
        }

        if(s[i] == 'L'){
            lCount += 1;
        }

        if(rCount == lCount){
            rCount = 0;
            lCount = 0
            count += 1;
            console.log('first')
        }
    }

    return count;
}

balancedStringSplit('RLRRRLLRLL')

// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
// Topic - normal loop