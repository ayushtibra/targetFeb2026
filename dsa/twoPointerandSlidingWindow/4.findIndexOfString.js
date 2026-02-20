function strStr(haystack,needle){
    const length = needle.length;

    for(let i = 0; i< haystack.length; i++){
        if(haystack.slice(i,i+length) == needle){
            console.log('checj')
            return i;
        } 
    }

    return -1;
}

const result = strStr('hello','ll');
console.log('result', result)

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/