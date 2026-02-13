function isSubsequence(s,t){
    let count = s.length;
    let index = 0;
    for(let i = 0;i<t.length;i++){
        if(t[i] == s[index]){
            index++;
            count--;
        }
    }

    if(count == 0){
        return true
        console.log('matched')
    }else {
        return false
    }
    
}

isSubsequence('axc','ahbgdc')

// https://leetcode.com/problems/is-subsequence/description/