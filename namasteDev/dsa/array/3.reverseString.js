function reverseString(s){
    let prev
    
    for(let i=0;i<s.length / 2;i++){
        prev = s[i];
        s[i] =  s[s.length - 1 - i]; ; 
        s[s.length - 1 - i] = prev; 
    }

    console.log('first',s)
}

const result = reverseString(["H","a","n","n","a","h"]);
console.log('first',result);

// https://leetcode.com/problems/reverse-string/
// Tpoic - two problem