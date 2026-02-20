var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;

        while(left < right){
            let midNum = Math.floor((left+right)/2);
            let guessVersion = isBadVersion(midNum);
            if(guessVersion) {
                right = midNum
            } else{
                left = midNum + 1
            } 
        }
        return left;
    };
};

https://leetcode.com/problems/first-bad-version/description/