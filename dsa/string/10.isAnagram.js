function isAnagram(s,t){
    if(s.length != t.length) return false;
    const sHash = {};

    for(let ch of s){
        if(!sHash[ch]){
            sHash[ch] = 1;
        } else {
            sHash[ch] += 1;
        }
    }

    for (let ch of t){
        if(sHash[ch]){
            sHash[ch] = sHash[ch] - 1;
        } else{
            return false;
        }
    }

    for(let ch in sHash){
        if(sHash[ch] != 0){
            return false
        } else {
            return true;
        }
    }

}

const result = isAnagram('anagram','nagaram');
console.log('result', result)

// https://leetcode.com/problems/valid-anagram/
// Topic - hashtable