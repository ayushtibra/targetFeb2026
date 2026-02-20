var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while(left <= right){
        let guessNumber = Math.floor((left + right)/2);
        let result = guess(guessNumber);
        if(result == 0) return guessNumber;
        if(result == 1) left = guessNumber + 1;
        if(result == -1) right = guessNumber - 1; 
    }
};

const result = guessNumber(1);
console.log('first', result)

// https://leetcode.com/problems/guess-number-higher-or-lower/description/