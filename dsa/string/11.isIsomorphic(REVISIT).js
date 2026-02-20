function isIsomorphic(s,t){
    let mapHash={};

    for(let i=0;i<s.length;i++){
        if(mapHash[s[i]]){
            if(mapHash[s[i]] != t[i]){
                return false;
            }
        } else if(Object.values(mapHash).includes(t[i])){
            return false;
        }

        mapHash[s[i]] = t[i]
    }

    // console.log('first', mapHash)
    return true
}

const result = isIsomorphic('badc','baba');
console.log('first', result)

// https://leetcode.com/problems/isomorphic-strings/