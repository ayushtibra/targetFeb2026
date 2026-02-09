function maxFreqSum(s) {
    const mixHashMap = {};
    const vowel = ['a', 'i', 'e', 'o', 'u']

    for (let i = 0; i < s.length; i++) {
        if (!mixHashMap[s[i]]) {
            mixHashMap[s[i]] = 1
        } else {
            mixHashMap[s[i]] += 1
        }
    }

    let maxVowelCount = 0,maxNormalCount = 0;
    for(let ch in mixHashMap){
        if(vowel.includes(ch)){
            maxVowelCount =  mixHashMap[ch] > maxVowelCount ? mixHashMap[ch] : maxVowelCount
        } else{
             maxNormalCount =  mixHashMap[ch] > maxNormalCount ? mixHashMap[ch] : maxNormalCount
        }
    }

    return maxVowelCount + maxNormalCount

    console.log('first', maxNormalCount, maxVowelCount)

}

maxFreqSum('successes');

// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
// topic- hashtable