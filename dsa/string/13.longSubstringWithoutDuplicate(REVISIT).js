function lengthOfLongestSubstring(s){
    let hashMap = {};
    let maxCount = 0;
    let index = 0;

    for(let i = 0; i <s.length; i++){
        if(hashMap[s[i]] != undefined){
            index = Math.max(index, hashMap[s[i]] + 1);
        }

        hashMap[s[i]] = i;
        // maxCount = maxCount > i - index + 1 ? maxCount : i - index + 1;
        maxCount = Math.max(maxCount, i - index + 1);
                console.log('first', maxCount)

    }

    return maxCount
}

lengthOfLongestSubstring("abba")